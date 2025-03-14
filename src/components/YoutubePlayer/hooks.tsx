import { useEffect, useState } from "react";

let apiLoadStarted = false;
let ytPromise: Promise<typeof window.YT>;

export const loadYoutubeApi = () => {
  if (ytPromise) return ytPromise;

  ytPromise = new Promise<typeof window.YT>((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const timeoutId = setTimeout(() => {
      reject("Unable to load Youtube API");
    }, 5000);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timeoutId);
      console.log("Youtube API ready");

      resolve(window.YT);
    };
    document.head.appendChild(tag);
  });

  return ytPromise;
};

export const useYoutubeApi = () => {
  const [YT, setYT] = useState<typeof window.YT>();

  useEffect(() => {
    if (YT) return;
    const load = async () => {
      try {
        setYT(await loadYoutubeApi());
      } catch (e) {
        console.error(e);
      }
    };

    load();
  }, []);

  return YT;
};

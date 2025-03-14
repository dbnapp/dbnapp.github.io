import React, { useEffect, useRef } from "react";
import { useYoutubeApi } from "./hooks";

export const YoutubePlayer = ({ id }) => {
  const YT = useYoutubeApi();
  const player = useRef<YT.Player>(null);

  useEffect(() => {
    if (!YT) return;
    if (player.current) return;
    console.log("new player");
    player.current = new YT.Player(`yt-${id}`, {
      events: {
        // onStateChange: onPlayerStateChange,
      },
    });
  }, [YT]);
  console.log("YT rendering");
  return (
    <iframe
      id={`yt-${id}`}
      src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1`}
    ></iframe>
  );
};

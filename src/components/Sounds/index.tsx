import React, { useEffect, useState } from "react";
import { YoutubePlayer } from "../YoutubePlayer";
import { useSetAtom } from "jotai";
import { musicAtom, soundsAtom } from "./atoms";

const useRenderDelay = (time: number) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return render;
};

export const Sounds = () => {
  const setSoundAtom = useSetAtom(soundsAtom);
  const setMusicAtom = useSetAtom(musicAtom);

  // using a render delay so the page loads faster before loading music
  const render = useRenderDelay(2000);
  return (
    render && (
      <div className="fixed">
        <YoutubePlayer videoId="nta1YhicoGw" onReady={setSoundAtom} />
        <YoutubePlayer
          playlistId="PLBHg69O7HDuHPzzuJ5zmn2Dz-p15xgo3I"
          loop
          shuffle
          onReady={setMusicAtom}
        />
      </div>
    )
  );
};

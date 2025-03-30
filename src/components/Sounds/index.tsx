import React from "react";
import { YoutubePlayer } from "../YoutubePlayer";
import { useSetAtom } from "jotai";
import { musicAtom, soundsAtom } from "./atoms";

export const Sounds = () => {
  const setSoundAtom = useSetAtom(soundsAtom);
  const setMusicAtom = useSetAtom(musicAtom);

  return (
    <div className="fixed z-50">
      <YoutubePlayer videoId="nta1YhicoGw" onReady={setSoundAtom} />
      <YoutubePlayer
        playlistId="PLBHg69O7HDuHPzzuJ5zmn2Dz-p15xgo3I"
        loop
        shuffle
        onReady={setMusicAtom}
      />
    </div>
  );
};

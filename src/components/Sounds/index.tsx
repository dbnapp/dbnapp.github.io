import React from "react";
import { YoutubePlayer } from "../YoutubePlayer";
import { useSetAtom } from "jotai";
import { musicAtom, soundsAtom } from "./atoms";

export const Sounds = () => {
  const setSoundAtom = useSetAtom(soundsAtom);
  const setMusicAtom = useSetAtom(musicAtom);

  return (
    <div className="fixed z-50">
      <YoutubePlayer id="nta1YhicoGw" onReady={setSoundAtom} />
      <YoutubePlayer id="BlvOAd10kJo" onReady={setMusicAtom} />
    </div>
  );
};

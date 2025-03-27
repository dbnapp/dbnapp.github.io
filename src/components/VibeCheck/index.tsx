import { useAtomValue } from "jotai";
import React, { useRef } from "react";
import { musicAtom, soundsAtom } from "../Sounds/atoms";
import { animate, AnimationPlaybackControls } from "motion";

export const VibeCheck = () => {
  const sounds = useAtomValue(soundsAtom);
  const music = useAtomValue(musicAtom);
  const animateRef = useRef<AnimationPlaybackControls>(null);

  const stopAnimation = () => {
    if (animateRef.current) {
      animateRef.current.stop();
    }
  };

  return (
    <div className="font-[Damion] mt-96 flex flex-col items-center justify-center">
      <div className="text-3xl md:text-5xl">Vibes on?</div>
      <div className="flex gap-6">
        <button
          className="text-5xl md:text-8xl"
          onClick={() => {
            stopAnimation();

            sounds?.setVolume(0);
            sounds?.unMute();
            music?.setVolume(0);
            music?.unMute();

            animateRef.current = animate(0, 100, {
              duration: 10,
              onUpdate: (v) => {
                sounds?.setVolume(v);
                music?.setVolume(v);
              },
            });
          }}
        >
          Absolutely!
        </button>
        <button
          className="text-5xl md:text-8xl"
          onClick={() => {
            stopAnimation();
            const initVol = sounds?.getVolume() || 100;

            animateRef.current = animate(initVol, 0, {
              duration: 5,
              onUpdate: (v) => {
                sounds?.setVolume(v);
                music?.setVolume(v);
              },
            });
          }}
        >
          Not!
        </button>
      </div>
    </div>
  );
};

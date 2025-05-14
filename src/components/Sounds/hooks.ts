import { useAtom, useAtomValue } from "jotai";
import { animate, AnimationPlaybackControls } from "motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { musicAtom, playerStateAtom, soundsAtom } from "./atoms";

export const useVolumeControls = () => {
  const [action, setAction] = useState<"mute" | "unmute" | "">("");
  const sounds = useAtomValue(soundsAtom);
  const music = useAtomValue(musicAtom);
  const [playerState, setPlayerState] = useAtom(playerStateAtom);
  const volumeAnimateRef = useRef<AnimationPlaybackControls>(null);

  const stopVolumeAnimation = () => {
    if (volumeAnimateRef.current) {
      volumeAnimateRef.current.stop();
    }
  };

  const animateMute = useCallback(() => {
    stopVolumeAnimation();
    const initVol = sounds?.getVolume() || 100;

    volumeAnimateRef.current = animate(initVol, 0, {
      duration: 5,
      onUpdate: (v) => {
        sounds?.setVolume(v);
        music?.setVolume(v);
      },
    });
  }, [sounds, music]);

  const animateUnmute = useCallback(() => {
    stopVolumeAnimation();

    sounds?.setVolume(0);
    sounds?.unMute();
    music?.setVolume(0);
    music?.unMute();

    volumeAnimateRef.current = animate(0, 100, {
      duration: 10,
      onUpdate: (v) => {
        sounds?.setVolume(v);
        music?.setVolume(v);
      },
    });
  }, [sounds, music]);

  // queues an action in case the players aren't ready yet
  useEffect(() => {
    if (sounds && music) {
      switch (action) {
        case "mute":
          animateMute();
          setPlayerState("muted");
          break;
        case "unmute":
          animateUnmute();
          setPlayerState("unmuted");
          break;
      }

      setAction("");
    }
  }, [sounds, music, action]);

  const mute = () => {
    if (playerState === "muted") return;
    setAction("mute");
  };
  const unmute = () => {
    if (playerState === "unmuted") return;
    setAction("unmute");
  };

  return { mute, unmute, playerState };
};

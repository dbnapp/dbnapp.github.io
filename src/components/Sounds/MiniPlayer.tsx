import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useVolumeControls } from "./hooks";

export const MiniPlayer = () => {
  const { playerState, mute, unmute } = useVolumeControls();
  const [visibleState, setVisibleState] = useState("hidden");

  useEffect(() => {
    if (playerState === "unmuted") {
      setVisibleState("visible");
    }
  }, [playerState]);

  return (
    <motion.div
      className="fixed left-8 top-8 w-16 cursor-pointer"
      initial="hidden"
      animate={[visibleState, playerState]}
      variants={{
        hidden: {
          x: -100,
        },
        visible: {
          x: 0,
        },
        muted: {
          scaleX: 1,
          scaleY: 1,
          translateY: 0,
        },
        unmuted: {
          scaleX: [1, 1.7, 0.5, 1, 1, 1, 1, 1],
          scaleY: [1, 0.5, 2, 1, 1, 1, 1, 1],
          translateY: [0, 0, -50, 0, 0, 0, 0, 0],
          transition: { repeat: Infinity, duration: 1.4 },
        },
      }}
      onClick={() => {
        if (playerState === "muted") {
          unmute();
        } else {
          mute();
        }
      }}
    >
      <img className="w-full h-full" src="/src/assets/radio.webp" />
    </motion.div>
  );
};

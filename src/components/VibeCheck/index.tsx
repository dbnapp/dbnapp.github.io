import React, { useState } from "react";
import { motion } from "motion/react";
import { useVolumeControls } from "../Sounds/hooks";

const absoluteButtonAnimateProperties = {
  absolutely: {
    translateX: "30%",
  },
  not: { translateX: "-14rem", visibility: "hidden", opacity: 0 },
  "": { translateX: "0rem" },
} as const;

const notButtonAnimateProperties = {
  absolutely: {
    translateX: "6rem",
    visibility: "hidden",
    opacity: 0,
  },
  not: { translateX: "-125%" },
  "": { translateX: "0rem" },
} as const;

export const VibeCheck = () => {
  const [currentButtonFocus, setCurrentButtonFocus] = useState<
    "absolutely" | "not"
  >("absolutely");
  const [choiceSelected, setChoiceSelected] = useState<
    "absolutely" | "not" | ""
  >("");

  const { mute, unmute } = useVolumeControls();

  return (
    <div className="snap-center font-[Damion] my-56 flex flex-col items-center justify-center">
      <div className="text-3xl md:text-5xl">Vibes on?</div>
      <div className="relative text-5xl md:text-8xl flex gap-6">
        <motion.button
          key="absolutely-button"
          className=""
          animate={{
            ...absoluteButtonAnimateProperties[choiceSelected],
          }}
          onClick={() => {
            setChoiceSelected("absolutely");
            unmute();
          }}
          onFocus={() => {
            setCurrentButtonFocus("absolutely");
          }}
          onMouseOver={() => {
            setCurrentButtonFocus("absolutely");
          }}
        >
          <motion.span
            animate={{
              color:
                choiceSelected === "absolutely"
                  ? [
                      "#ff00ff",
                      "#00ffff",
                      "#00ff00",
                      "#ffff00",
                      "#ff0000",
                      "#ff00ff",
                    ]
                  : [],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            Absolutely
            <motion.span
              animate={{
                opacity: currentButtonFocus === "absolutely" ? 1 : 0,
              }}
            >
              !
            </motion.span>
          </motion.span>
        </motion.button>
        <motion.button
          key="not-button"
          className=""
          animate={{
            ...notButtonAnimateProperties[choiceSelected],
          }}
          onClick={() => {
            setChoiceSelected("not");
            mute();
          }}
          onFocus={() => {
            setCurrentButtonFocus("not");
          }}
          onMouseOver={() => {
            setCurrentButtonFocus("not");
          }}
        >
          Not
          <motion.span
            animate={{
              opacity: currentButtonFocus === "not" ? 1 : 0,
            }}
          >
            !
          </motion.span>
        </motion.button>

        {/* pointer animates separately between moving between options and repeatedly up and down, thus two divs */}
        <motion.div
          key="pointer"
          className="absolute top-12 md:top-24"
          animate={{
            left: currentButtonFocus === "absolutely" ? "25%" : "80%",
            visibility: choiceSelected ? "hidden" : "visible",
            opacity: choiceSelected ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.div
            className=" pointer-events-none"
            animate={{
              translateY: ["0%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.75,
            }}
          >
            👆
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

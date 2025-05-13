import React, { useState } from "react";
import { motion } from "motion/react";
import { useVolumeControls } from "../Sounds/hooks";
import { VibeButton } from "./VibeButton";

export const VibeCheck = () => {
  const [currentButtonFocus, setCurrentButtonFocus] = useState<
    "absolutely" | "not"
  >("absolutely");
  const [choiceSelected, setChoiceSelected] = useState<
    "absolutely" | "not" | ""
  >("");

  const { mute, unmute } = useVolumeControls();

  return (
    <div className="snap-center font-[Damion] flex flex-col items-center justify-center">
      <div className="text-3xl md:text-5xl pb-6">Vibes on?</div>
      <div className="relative text-5xl md:text-8xl flex flex-wrap justify-center gap-6">
        <VibeButton
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
        </VibeButton>
        <VibeButton
          key="not-button"
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
        </VibeButton>

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
        ></motion.div>
      </div>
    </div>
  );
};

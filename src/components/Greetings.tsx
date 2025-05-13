import { motion } from "motion/react";
import React from "react";

export const Greetings = () => {
  return (
    <div className="snap-center font-[Damion]  flex flex-col items-center justify-center">
      <motion.div
        className="text-5xl md:text-8xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="text-3xl md:text-5xl"
          initial={{ opacity: 0, x: 50, rotate: 190 }}
          animate={{
            opacity: 1,
            x: "-1.5em",
            y: "-0.75em",
            rotate: -20,
            transition: {
              delay: 1,
            },
          }}
        >
          Greetings from
        </motion.div>
        dbnapp.com
      </motion.div>
    </div>
  );
};

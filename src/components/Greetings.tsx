import { motion } from "motion/react";
import React from "react";

export const Greetings = () => {
  return (
    <div className="font-[Damion] mt-96 flex flex-col items-center justify-center">
      <motion.div
        className="text-3xl md:text-5xl"
        initial={{ opacity: 0, x: 50, rotate: 190 }}
        animate={{
          opacity: 1,
          x: -200,
          rotate: -20,
          transition: {
            delay: 1,
          },
        }}
      >
        Greetings from
      </motion.div>
      <motion.div
        className="text-5xl md:text-8xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        dbnapp.com
      </motion.div>
    </div>
  );
};

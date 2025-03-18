import { motion } from "motion/react";
import React from "react";

export const Greetings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="font-[Damion] mt-96 flex flex-col items-center justify-center"
    >
      <div className="text-3xl md:text-5xl">Greetings from</div>
      <div className="text-5xl md:text-8xl">dbnapp.com</div>
    </motion.div>
  );
};

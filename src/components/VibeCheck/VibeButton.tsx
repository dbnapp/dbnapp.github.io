import React from "react";
import { motion } from "motion/react";

export const VibeButton = ({ children, ...props }) => {
  return (
    <motion.button
      className="group rounded-2xl"
      initial={{
        backgroundColor: "rgb(253 186 116 / 0)",
      }}
      whileInView={{
        backgroundColor: "rgb(253 186 116 / 1)",
      }}
      transition={{
        delay: 0.8,
      }}
      {...props}
    >
      <motion.div
        whileTap={{
          translateY: "0.5rem",
        }}
      >
        <motion.div
          className="rounded-2xl p-4"
          initial={{
            backgroundColor: "rgb(255 237 213 / 0)",
            translateY: "0rem",
          }}
          whileInView={{
            backgroundColor: "rgb(255 237 213 / 1)",
            translateY: "-0.75rem",
          }}
          transition={{
            delay: 0.7,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

import React from "react";
import { EnvelopeFront } from "./EnvelopeFront";
import { motion, useScroll, useTransform } from "motion/react";
import { EnvelopeBack } from "./EnvelopeBack";

export const Envelope = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const paperTranslateY = useTransform(
    scrollYProgress,
    [0.9, 1],
    ["0%", "-30%"]
  );
  const envelopeTranslateY = useTransform(
    scrollYProgress,
    [0.6, 0.75],
    ["100%", "0%"]
  );

  return (
    <div>
      <motion.div
        className="fixed -bottom-[18.8rem] w-[95%] lg:w-[70rem]"
        style={{ translateY: envelopeTranslateY }}
      >
        <EnvelopeBack />
      </motion.div>
      <motion.div
        className="sticky -bottom-[36rem] w-[95%]"
        style={{ translateY: paperTranslateY }}
      >
        {children}
      </motion.div>
      <motion.div
        className="fixed -bottom-[20rem] w-[95%] lg:w-[70rem]"
        style={{ translateY: envelopeTranslateY }}
      >
        <EnvelopeFront />
      </motion.div>
    </div>
  );
};

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
        className="
          fixed left-0 right-0 my-0 mx-auto
          -bottom-[4.7rem] w-[95%] 
          sm:-bottom-[8.3rem]
          md:-bottom-[11.2rem]
          lg:-bottom-[18.8rem] lg:w-[62rem]"
        style={{ translateY: envelopeTranslateY }}
      >
        <EnvelopeBack />
      </motion.div>
      <motion.div
        className="
          sticky
          p-5
          sm:p-10
          md:p-12
          lg:w-[95%] lg:max-w-[62rem] lg:mx-auto"
        style={{ translateY: paperTranslateY }}
      >
        {children}
      </motion.div>
      <motion.div
        className="
          fixed left-0 right-0 my-0 mx-auto  pointer-events-none
          -bottom-20 w-[95%]
          sm:-bottom-36
          md:-bottom-48
          lg:-bottom-[20rem] lg:w-[62rem]"
        style={{ translateY: envelopeTranslateY }}
      >
        <EnvelopeFront />
      </motion.div>
    </div>
  );
};

import React from "react";
import { Envelope } from "./Envelope";
import { motion } from "motion/react";

const projects = [
  {
    title: "dbnapp.com",
    thumbnail: "",
    description:
      "My site! Built using Typescript, React, Tailwind CSS, and Vite. Maybe you've seen it. This is actually the third iteration of it. Heavily inspired by things like city pop, vapor wave, sunsets, nostalgia. ",
  },
];

export const Projects = () => {
  return (
    <div className="w-[95%] lg:w-[70rem]">
      <motion.div className="-bottom-[24rem] w-[95%] lg:w-[70rem]">
        <Envelope>
          <div
            className="flex flex-col gap-4 items-center sm:mx-8 md:mx-24 px-12 py-16 rounded-sm shadow-lg
      bg-[url('./assets/paper-texture.webp')] mt-[45rem]"
          >
            <div className="font-[IndieFlower] font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl pb-8">
              Some projects of mine...
            </div>
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center">
                <div className="col-span-4 justify-self-center font-[Damion] text-3xl">
                  {project.title}
                </div>
                <div className="col-span-4 md:col-span-1 justify-self-center w-full max-w-36 aspect-square bg-gray-400 rounded"></div>
                <p className="col-span-4 md:col-span-3 font-[IndieFlower] text-center md:text-left">
                  {project.description}
                </p>
              </div>
            ))}
            <div className="font-[IndieFlower] text-xl md:text-2xl lg:text-4xl pt-16">
              ... and more to come!
            </div>
          </div>
        </Envelope>
      </motion.div>
    </div>
  );
};

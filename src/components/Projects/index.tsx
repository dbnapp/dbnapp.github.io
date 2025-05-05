import React from "react";
import { Envelope } from "./Envelope";

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
    <div className="snap-center my-56 w-[95%] lg:w-[70rem]">
      <div className="flex flex-col gap-4 items-center bg-orange-100 md:mx-24 px-12 py-16 rounded-sm shadow-lg">
        <div className="font-[IndieFlower] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-8">
          Some projects of mine...
        </div>
        {projects.map((project, index) => (
          <div key={index} className="flex gap-8 items-center">
            <div className="w-36 h-36 bg-gray-400 rounded"></div>
            <div className="flex-1 font-[IndieFlower]">
              <div className="font-[Damion] text-2xl pb-2">{project.title}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
        <div className="font-[IndieFlower] text-xl md:text-2xl lg:text-4xl pt-16">
          ... and more to come!
        </div>
      </div>
      <Envelope />
    </div>
  );
};

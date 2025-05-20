import React from "react";
import { Envelope } from "./Envelope";
import dbnappComUrl from "/src/assets/dbnapp-com.webm";
import dbnappComThumbnailUrl from "/src/assets/dbnapp-com-thumbnail.webp";

// todo: dynamic later
const projects = [
  {
    title: "dbnapp.com",
    url: "https://dbnapp.com",
    srcUrl: dbnappComUrl,
    thumbnailUrl: dbnappComThumbnailUrl,
    githubUrl: "",
    description:
      "My site! Maybe you've seen it? Built using Typescript, React, Tailwind CSS, Motion and Vite. This is actually the third iteration of it. Heavily inspired by things like city pop, vapor wave, sunsets, nostalgia. ",
  },
];

export const Projects = () => {
  return (
    <Envelope>
      <div
        className="
          flex flex-col gap-4 items-center  py-16 rounded-sm shadow-lg bg-[url('./assets/paper-texture.webp')] 
          mt-24 px-4
          sm:px-12
          md:mt-[36rem]
          lg:mt-[28rem]"
      >
        <div
          className="
          font-[IndieFlower] font-bold pb-8
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          lg:text-5xl"
        >
          Some projects of mine...
        </div>
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center">
            <a
              href={project.url}
              className="col-span-4 justify-self-center font-[Damion] text-3xl"
            >
              {project.title}
            </a>
            <div className="col-span-4 md:col-span-1 justify-self-center w-full max-w-36 aspect-square bg-gray-400 rounded">
              <video
                className="w-full h-full"
                autoPlay
                loop
                muted
                poster={project.thumbnailUrl}
              >
                <source src={project.srcUrl} type="video/webm" />
              </video>
            </div>
            <p className="col-span-4 md:col-span-3 font-[IndieFlower] text-center md:text-left">
              {project.description}
            </p>
          </div>
        ))}
        <div
          className="
            font-[IndieFlower] pt-16
            text-xl 
            md:text-2xl 
            lg:text-4xl"
        >
          ... and more to come!
        </div>
      </div>
    </Envelope>
  );
};

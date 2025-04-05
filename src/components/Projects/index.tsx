import React from "react";
import { Envelope } from "./Envelope";

const projects = [
  {
    title: "dbnapp.com",
    thumbnail: "",
    description:
      "My site! Built using Typescript, React, Tailwind CSS, and Vite. Maybe you've seen it idk. Previous version of this site I wanted to be kind of minimal, even foregoing using any frameworks. Really flex my core js and css knowledge. This time I just wanted to make something quicker and more interesting. So I did! ",
  },
];

export const Projects = () => {
  return (
    <div className="w-[95%] lg:w-[70rem]">
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="font-[Damion]">{project.title}</div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <Envelope />
    </div>
  );
};

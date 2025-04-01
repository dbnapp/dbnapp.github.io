import React from "react";
import { Greetings } from "./Greetings";
import { Backdrop } from "./Backdrop";
import { Postcard } from "./Postcard";
import { Sounds } from "./Sounds";
import { VibeCheck } from "./VibeCheck";
import { Projects } from "./Projects";

export const App = () => (
  <div className="w-screen h-screen overflow-hidden bg-[url('./assets/seaside.webp')] bg-cover bg-center">
    <Sounds />
    <Backdrop />
    <div className="h-screen overflow-auto">
      <div className="relative flex flex-col gap-[30rem] flex-nowrap items-center">
        <Greetings />
        <VibeCheck />
        <Postcard />
        <Projects />
        <div /> {/* Empty div to create space for the postcard */}
      </div>
    </div>
  </div>
);

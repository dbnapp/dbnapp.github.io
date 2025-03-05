import React from "react";
import { Greetings } from "./Greetings";
import { Backdrop } from "./Backdrop";

export const App = () => {
  return (
    <div className="fixed grid w-full h-full grid-cols-11 grid-rows-11 gap-4 bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Backdrop />
      <Greetings />
    </div>
  );
};

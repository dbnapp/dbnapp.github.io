import React, { useState } from "react";
import { Greetings } from "./Greetings";
import { Backdrop } from "./Backdrop";
import { Sounds } from "./Sounds";
import { Postcard } from "./Postcard";

export const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Sounds />
      <Backdrop />
      <div className="h-screen overflow-auto">
        <div className="relative font-[Damion] flex flex-col gap-96 flex-nowrap items-center">
          <Greetings />
          <Postcard />
        </div>
      </div>
    </div>
  );
};

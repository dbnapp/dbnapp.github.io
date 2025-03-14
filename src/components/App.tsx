import React, { useState } from "react";
import { Greetings } from "./Greetings";
import { Backdrop } from "./Backdrop";
import { Sounds } from "./Sounds";

export const App = () => {
  const [loadSounds, setLoadSounds] = useState(false);

  return (
    <div className="grid w-[100vw] h-[100vh] grid-cols-11 grid-rows-11 gap-4 bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Backdrop />
      <Greetings />
      <button className="relative" onClick={() => setLoadSounds(true)} />
      <Sounds />
    </div>
  );
};

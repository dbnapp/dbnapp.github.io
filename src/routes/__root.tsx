import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sounds } from "../components/Sounds";
import { Backdrop } from "../components/Backdrop";
import { MiniPlayer } from "../components/Sounds/MiniPlayer";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Sounds />
      <Backdrop />
      <div className="snap-y h-screen overflow-auto relative flex flex-col flex-nowrap items-center gap-[65vh] before:content-[''] after:content-['']">
        <Outlet />
      </div>
      <MiniPlayer />
    </div>
  ),
});

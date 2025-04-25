import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sounds } from "../components/Sounds";
import { Backdrop } from "../components/Backdrop";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Sounds />
      <Backdrop />
      <div className="snap-y h-screen overflow-auto relative flex flex-col flex-nowrap items-center">
        <Outlet />
      </div>
    </div>
  ),
});

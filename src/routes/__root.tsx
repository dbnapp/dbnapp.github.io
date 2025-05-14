import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sounds } from "../components/Sounds";
import { Backdrop } from "../components/Backdrop";

export const Route = createRootRoute({
  component: () => (
    <div>
      <div className="fixed w-screen h-screen bg-[url('./assets/seaside.webp')] bg-cover bg-center"></div>
      <Sounds />
      <Backdrop />
      <div className="snap-y snap-mandatory relative flex flex-col flex-nowrap items-center gap-[45vh] before:content-[''] ">
        <Outlet />
      </div>
    </div>
  ),
});

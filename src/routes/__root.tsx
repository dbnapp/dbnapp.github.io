import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sounds } from "../components/Sounds";
import { Backdrop } from "../components/Backdrop";

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen overflow-hidden bg-[url('./assets/seaside.webp')] bg-cover bg-center">
      <Sounds />
      <Backdrop />
      <div className="h-screen overflow-auto">
        <div className="relative flex flex-col gap-[30rem] flex-nowrap items-center">
          <Outlet />
        </div>
      </div>
    </div>
  ),
});

// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Sounds } from "../components/Sounds";
import { Backdrop } from "../components/Backdrop";

import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Daryl Brendt Napp | Web Developer Extraordinaire",
      },
      { name: "description", content: "I'm a web developer. This is my site." },
      { name: "apple-mobile-web-app-title", content: "dbnapp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/png",
        href: "/src/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/src/assets/favicon/favicon.svg",
      },
      { rel: "shortcut icon", href: "/src/assets/favicon/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/src/assets/favicon/apple-touch-icon.png",
      },
      { rel: "manifest", href: "/src/assets/favicon/site.webmanifest" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div>
        <div className="fixed w-screen h-screen bg-[url('/src/assets/seaside.webp')] bg-cover bg-center"></div>
        <Sounds />
        <Backdrop />
        <div className="snap-y snap-mandatory relative flex flex-col flex-nowrap items-center gap-[45vh] before:content-[''] ">
          <Outlet />
        </div>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

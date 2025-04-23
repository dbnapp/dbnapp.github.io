import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Greetings } from "../components/Greetings";
import { VibeCheck } from "../components/VibeCheck";
import { Projects } from "../components/Projects";
import { Postcard } from "../components/Postcard";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Greetings />
      <VibeCheck />
      <Postcard />
      <Projects />
    </>
  ),
});

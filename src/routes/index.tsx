import { createFileRoute } from "@tanstack/react-router";
import { Greetings } from "../components/Greetings";

export const Route = createFileRoute("/")({
  component: Greetings,
});

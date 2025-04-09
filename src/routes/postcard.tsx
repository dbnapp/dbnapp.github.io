import { createFileRoute } from "@tanstack/react-router";
import { Postcard } from "../components/Postcard";

export const Route = createFileRoute("/postcard")({
  component: Postcard,
});

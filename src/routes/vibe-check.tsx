import { createFileRoute } from "@tanstack/react-router";
import { VibeCheck } from "../components/VibeCheck";

export const Route = createFileRoute("/vibe-check")({
  component: VibeCheck,
});

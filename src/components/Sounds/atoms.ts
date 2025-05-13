import { atom } from "jotai";

export const soundsAtom = atom<YT.Player>();
export const musicAtom = atom<YT.Player>();
export const playerStateAtom = atom<"muted" | "unmuted">("muted");

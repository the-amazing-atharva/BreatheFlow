import { create } from "zustand";

type BreathPhase = "inhale" | "hold" | "exhale" | "rest";

interface BreathingState {
  phase: BreathPhase;
  isRunning: boolean;
  setPhase: (phase: BreathPhase) => void;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export const useBreathingStore = create<BreathingState>((set) => ({
  phase: "inhale",
  isRunning: false,
  setPhase: (phase) => set({ phase }),
  start: () => set({ isRunning: true }),
  pause: () => set({ isRunning: false }),
  reset: () => set({ isRunning: false, phase: "inhale" }),
}));

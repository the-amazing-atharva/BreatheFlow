import { motion, AnimatePresence } from "framer-motion";
import { useBreathingStore } from "../state/useBreathingStore";
import { useEffect, useState } from "react";

const PHASES = [
  { name: "inhale", duration: 4000 },
  { name: "hold", duration: 2000 },
  { name: "exhale", duration: 4000 },
  { name: "rest", duration: 2000 },
] as const;

type Phase = (typeof PHASES)[number]["name"];

export function BreathAnimator() {
  const { isRunning, phase, setPhase } = useBreathingStore();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      const nextIndex = (index + 1) % PHASES.length;
      setIndex(nextIndex);
      setPhase(PHASES[nextIndex].name);
    }, PHASES[index].duration);

    return () => clearTimeout(timer);
  }, [isRunning, index, setPhase]);

  const getScale = (phase: Phase) => {
    switch (phase) {
      case "inhale":
      case "hold":
        return 1.6;
      case "exhale":
        return 0.7;
      case "rest":
        return 1;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-8">
      <motion.div
        key={phase}
        animate={{ scale: getScale(phase) }}
        transition={{
          duration: phase === "hold" ? 0 : 2,
          ease: "easeInOut",
        }}
        className="w-48 h-48 rounded-full bg-white bg-opacity-20 backdrop-blur-md shadow-2xl border border-white/30"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-white font-semibold tracking-wide"
        >
          {phase.toUpperCase()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

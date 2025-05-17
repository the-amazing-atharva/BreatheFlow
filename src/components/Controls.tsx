import { useBreathingStore } from "../state/useBreathingStore";

export function Controls() {
  const { isRunning, start, pause, reset } = useBreathingStore();

  return (
    <div className="flex gap-6 mt-12">
      <button
        className="px-6 py-3 rounded-full bg-green-500 text-white font-medium text-lg shadow-md hover:bg-green-600 active:scale-95 transition-all"
        onClick={isRunning ? pause : start}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        className="px-6 py-3 rounded-full bg-white bg-opacity-20 text-white font-medium text-lg hover:bg-opacity-30 transition-all"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

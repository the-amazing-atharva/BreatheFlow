import { BreathAnimator } from "../components/BreathAnimator";
import { Controls } from "../components/Controls";

export default function SessionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#8EC5FC] via-[#E0C3FC] to-[#F9F9F9] text-center px-4">
      <div className="max-w-md w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-sm mb-4 tracking-tight">
          BreatheFlow
        </h1>
        <p className="text-white text-lg opacity-80 mb-8">
          A mindful, calming breathwork experience
        </p>
        <BreathAnimator />
        <Controls />
      </div>
    </div>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calmBlue: "#A2D2FF",
        softPink: "#FFC8DD",
        serenePurple: "#CDB4DB",
      },
      animation: {
        pulseSlow: "pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

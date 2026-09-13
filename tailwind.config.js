/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        ink: "var(--ink)",
        paper: "#f8f7f1",
        canvas: "#e8ecea",
        muted: "var(--muted)",
        accent: "#ff6848",
        "accent-soft": "#f5a08a",
        atmosphere: "#9cc7ed",
      },
    },
  },
  plugins: [],
}

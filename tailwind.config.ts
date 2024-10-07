import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "30%": { transform: "translateX(10px) rotate(0deg)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0) rotate(180deg)" },
          "70%": { transform: "translateX(10px) rotate(180deg)" },
        },
      },
      animation: {
        "bounce-left": "bounce-left 1s ease-in-out infinite",
        "bounce-right": "bounce-right 1s ease-in-out infinite",
      },
      boxShadow: {
        card: "-8px 8px 0",
      },
      colors: {
        charcoal: {
          DEFAULT: "#1e1e1e",
        },
      },
      transitionTimingFunction: {
        anticipate: "cubic-bezier(1.000, -0.600, 0.585, 0.965)",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";
import { themes } from "./src/styles/themes";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
    },
    container: {
      center: true,
    },
    boxShadow: {
      sm: "0 0 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 0 6px -1px rgba(0, 0, 0, 0.1), 0 0 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 0 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 0 50px -12px rgba(0, 0, 0, 0.4)",
      "3xl": "0 0 60px -15px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)"],
      },
    },
  },

  plugins: [createThemes({ ...themes }), require("tailwindcss-safe-area")],
} satisfies Config;

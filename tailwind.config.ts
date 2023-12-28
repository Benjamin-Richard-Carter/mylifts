import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";
import type { Theme } from "~/types/styles";
import { darkTheme } from "./src/styles/themes/dark";
import { lightTheme } from "./src/styles/themes/light";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },

  plugins: [
    createThemes({
      dark: darkTheme,
      light: lightTheme,
    } satisfies Record<string, Theme>),
    require("tailwindcss-safe-area"),
  ],
} satisfies Config;

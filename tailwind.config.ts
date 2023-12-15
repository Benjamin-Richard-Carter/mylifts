import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";

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
      default: {
        primary: "#181818",

        surface: {
          100: "#181818",
          200: "#1f1f1f",
        },
      },
    }),
  ],
} satisfies Config;

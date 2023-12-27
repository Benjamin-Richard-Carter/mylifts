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
          300: "#242424",
          400: "#2b2b2b",
          500: "#303030",
          600: "#363636",
          700: "#3d3d3d",
          800: "#424242",
          900: "#484848",
        },

        text: {
          100: "#ffffff",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4d4d4d",
          900: "#333333",
        },
      },
    }),
  ],
} satisfies Config;

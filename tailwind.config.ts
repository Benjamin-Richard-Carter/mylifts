import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";
import { themes } from "./src/styles/themes";
import { withTV } from "tailwind-variants/transformer";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
    },
    container: {
      center: true,
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

// export default withTV({
//   content: ["./src/**/*.tsx"],
//   theme: {
//     screens: {
//       sm: "640px",
//     },
//     container: {
//       center: true,
//     },
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//         display: ["var(--font-display)"],
//       },
//     },
//   },

//   plugins: [createThemes({ ...themes }), require("tailwindcss-safe-area")],
// } satisfies Config);

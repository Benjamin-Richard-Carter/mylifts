import { Theme } from "~/types/styles";

export const themes: Record<string, Theme> = {
  dark: {
    background: "#202020",
    cutout: "#161616",
    highlight: "#b85a03",
    warning: "#c93e3e",

    surface: {
      1: "#161616",
      2: "#202020",
    },

    content: {
      1: "#f0f0f0",
      2: "#cac9c9",
      3: "#b5b4b4",
    },
  },
  light: {
    background: "#f0f0f0",
    cutout: "#ffffff",
    highlight: "#b85a03",
    warning: "#e63333",

    surface: {
      1: "#ffffff",
      2: "#f0f0f0",
    },

    content: {
      1: "#1F1F1F",
      2: "#3d3d3d",
      3: "#5c5c5c",
    },
  },
};

export const getCutoutValue = (themeName: string) => {
  const theme = themes[themeName];
  return theme?.cutout ?? "#000000";
};

export const getBackgroundValue = (themeName: string) => {
  const theme = themes[themeName];
  return theme?.background ?? "#000000";
};

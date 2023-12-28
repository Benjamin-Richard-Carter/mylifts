import { Theme } from "~/types/styles";

export const themes: Record<string, Theme> = {
  dark: {
    background: "#f0f0f0",
    cutout: "#f0f0f0",
    alert: "#b85a03",

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
  light: {
    background: "#f0f0f0",
    cutout: "#f0f0f0",
    alert: "#b85a03",

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

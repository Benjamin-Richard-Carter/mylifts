import { Theme } from "~/types/styles";

export const themes: Record<string, Theme> = {
  default: {
    background: "rgba(240, 240, 240, 1)",
    cutout: "rgba(255, 255, 255, 1)",
    highlight: "rgba(184, 90, 3, 1)",
    warning: "rgba(230, 51, 51, 1)",
    border: "rgba(255, 255, 255, 0)",

    surface: {
      1: "rgba(255, 255, 255, 1)",
      2: "rgba(240, 240, 240, 1)",
    },
    content: {
      1: "rgba(31, 31, 31, 1)",
      2: "rgba(61, 61, 61, 1)",
      3: "rgba(92, 92, 92, 1)",
    },
  },

  monochrome: {
    background: "rgba(255, 255, 255, 1)",
    cutout: "rgba(255, 255, 255, 1)",
    highlight: "rgba(184, 90, 3, 1)",
    warning: "rgba(230, 51, 51, 1)",
    border: "rgba(0, 0, 0, 1)",
    surface: {
      1: "rgba(255, 255, 255, 1)",
      2: "rgba(255, 255, 255, 1)",
    },
    content: {
      1: "rgba(0, 0, 0, 1)",
      2: "rgba(66, 66, 66, 1)",
      3: "rgba(92, 92, 92, 1)",
    },
  },

  monochrome2: {
    background: "rgba(0, 0, 0, 1)",
    cutout: "rgba(255, 255, 255, 1)",
    highlight: "rgba(184, 90, 3, 1)",
    warning: "rgba(230, 51, 51, 1)",
    border: "rgba(255, 255, 255, 1)",
    surface: {
      1: "rgba(0, 0, 0, 1)",
      2: "rgba(0, 0, 0, 1)",
    },
    content: {
      1: "rgba(255, 255, 255, 1)",
      2: "rgba(230, 230, 230, 1)",
      3: "rgba(92, 92, 92, 1)",
    },
  },

  dark: {
    background: "rgba(32, 32, 32, 1)",
    cutout: "rgba(22, 22, 22, 1)",
    highlight: "rgba(184, 90, 3, 1)",
    warning: "rgba(201, 62, 62, 1)",
    border: "rgba(255, 255, 255, 0)",

    surface: {
      1: "rgba(22, 22, 22, 1)",
      2: "rgba(32, 32, 32, 1)",
    },

    content: {
      1: "rgba(240, 240, 240, 1)",
      2: "rgba(202, 201, 201, 1)",
      3: "rgba(181, 180, 180, 1)",
    },
  },

  warm: {
    background: "rgba(44, 41, 39, 1)",
    cutout: "rgba(59, 56, 54, 1)",
    highlight: "rgba(215, 153, 33, 1)",
    warning: "rgba(204, 36, 29, 1)",
    border: "rgba(255, 255, 255, 0)",
    surface: {
      "1": "rgba(59, 56, 54, 1)",
      "2": "rgba(51, 47, 45, 1)",
    },
    content: {
      "1": "rgba(251, 241, 199, 1)",
      "2": "rgba(235, 219, 178, 1)",
      "3": "rgba(213, 196, 161, 1)",
    },
  },

  retro: {
    background: "rgba(241, 235, 222, 1)",
    cutout: "rgba(209, 198, 181, 1)",
    highlight: "rgba(212, 175, 55, 1)",
    warning: "rgba(255, 99, 71, 1)",
    border: "rgba(255, 255, 255, 0)",
    surface: {
      "1": "rgba(209, 198, 181, 1)",
      "2": "rgba(228, 218, 197, 1)",
    },
    content: {
      "1": "rgba(0, 0, 0, 1)",
      "2": "rgba(0, 0, 0, 1)",
      "3": "rgba(139, 69, 19, 1)",
    },
  },
};

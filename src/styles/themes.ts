import { Theme } from "~/types/styles";

export const themes: Record<string, Theme> = {
  default: {
    background: "rgb(240, 240, 240)",
    cutout: "rgb(255, 255, 255)",
    highlight: "rgb(184, 90, 3)",
    warning: "rgb(230, 51, 51)",
    border: "rgb(255, 255, 255, 0)",

    surface: {
      1: "rgb(255, 255, 255)",
      2: "rgb(240, 240, 240)",
      3: "rgb(255, 255, 255)",
    },
    content: {
      1: "rgb(31, 31, 31)",
      2: "rgb(61, 61, 61)",
      3: "rgb(92, 92, 92)",
    },
  },

  Dark: {
    background: "rgb(32, 32, 32)",
    cutout: "rgb(22, 22, 22)",
    highlight: "rgb(184, 90, 3)",
    warning: "rgb(201, 62, 62)",
    border: "rgb(255, 255, 255, 0)",

    surface: {
      1: "rgb(25, 25, 25)",
      2: "rgb(39, 39, 39)",
      3: "rgb(44, 44, 44)",
    },

    content: {
      1: "rgb(240, 240, 240)",
      2: "rgb(202, 201, 201)",
      3: "rgb(181, 180, 180)",
    },
  },

  Retro_Light: {
    background: "rgb(241, 235, 222)",
    cutout: "rgb(209, 198, 181)",
    highlight: "rgb(212, 175, 55)",
    warning: "rgb(255, 99, 71)",
    border: "rgba(255, 255, 255, 0)",
    surface: {
      "1": "rgb(209, 198, 181)",
      "2": "rgb(223, 212, 191)",
      "3": "rgb(226, 216, 198)",
    },
    content: {
      "1": "rgb(0, 0, 0)",
      "2": "rgb(0, 0, 0)",
      "3": "rgb(139, 69, 19)",
    },
  },

  Retro_Dark: {
    background: "rgb(44, 41, 39)",
    cutout: "rgb(59, 56, 54)",
    highlight: "rgb(215, 153, 33)",
    warning: "rgb(204, 36, 29)",
    border: "rgb(255, 255, 255, 0)",
    surface: {
      "1": "rgb(59, 56, 54)",
      "2": "rgb(51, 47, 45)",
      "3": "rgb(65, 60, 57)",
    },
    content: {
      "1": "rgb(251, 241, 199)",
      "2": "rgb(235, 219, 178)",
      "3": "rgb(213, 196, 161)",
    },
  },
};

export const generateThemeNameDictionary = (themes: Record<string, Theme>) => {
  const themeNames = Object.keys(themes);

  const themeNameDictionary = themeNames.reduce(
    (acc, curr) => {
      const name = curr.replace(/_/g, " ");
      acc[curr] = name;
      return acc;
    },
    {} as Record<string, string>,
  );

  return themeNameDictionary;
};

export const themeNameDictionaryV2 = (themes: Record<string, Theme>) => {
  const themeNames = Object.keys(themes);

  const themeNameDictionary = themeNames.map((theme) => {
    return {
      displayName: theme.replace(/_/g, " "),
      themeName: theme,
    };
  });

  return themeNameDictionary;
};

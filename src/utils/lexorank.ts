import { LexoRank } from "lexorank";

type GenerateLexoRank = {
  indexList: string[];
  newIndex?: string;
};

export const generateLexoRank = ({ indexList, newIndex }: GenerateLexoRank) => {
  const position = indexList.indexOf(newIndex ?? "");
  const oldItem = indexList[position];
  const nextItem = indexList[position + 1];
  const previousItem = indexList[position - 1];

  if (!oldItem) {
    return LexoRank.middle();
  }

  if (!previousItem && nextItem) {
    const rank = LexoRank.parse(oldItem).genPrev();
    return rank;
  }

  if (!nextItem && previousItem) {
    const rank = LexoRank.parse(oldItem).genNext();
    return rank;
  }

  if (nextItem && previousItem) {
    const rank = LexoRank.parse(previousItem).between(LexoRank.parse(oldItem));
    return rank;
  }
};

type AppendLexoRank = {
  indexList: string[];
};

export const appendLexoRank = ({ indexList }: AppendLexoRank) => {
  const lastItem = indexList[indexList.length - 1];

  if (!lastItem) {
    return LexoRank.middle();
  }

  const rank = LexoRank.parse(lastItem).genNext();
  return rank;
};

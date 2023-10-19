import { CHARS } from "../consts/chars";
import { getSuggests } from "./getSuggests";

export const getSuggestsAll = async (query: string) => {
  const chars = ["", ...CHARS];
  const suggestsList = await Promise.all(
    chars.map((c) => getSuggests(`${query} ${c}`)),
  );
  return chars.map((c, i) => ({ c: c, list: suggestsList[i] }));
};

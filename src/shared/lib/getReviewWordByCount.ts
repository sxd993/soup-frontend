import { getRuPluralWord } from "./pluralizeRu";

export const getReviewWordByCount = (count: number): string =>
  getRuPluralWord(count, ["отзыв", "отзыва", "отзывов"]);

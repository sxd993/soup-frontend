type RuPluralForms = [one: string, few: string, many: string];

export const getRuPluralWord = (count: number, forms: RuPluralForms): string => {
  const absCount = Math.abs(count);
  const lastTwoDigits = absCount % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2];
  }

  const lastDigit = absCount % 10;

  if (lastDigit === 1) {
    return forms[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1];
  }

  return forms[2];
};

export const formatRuCountWithWord = (
  count: number,
  forms: RuPluralForms,
): string => `${count} ${getRuPluralWord(count, forms)}`;

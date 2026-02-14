/** Парсит дату в формате DD.MM.YYYY и возвращает ISO-строку или undefined */
export function deadlineToISO(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  const match = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!match) return undefined;
  const [, d, m, y] = match;
  const day = Number(d);
  const month = Number(m) - 1;
  const year = Number(y);
  if (month < 0 || month > 11 || day < 1 || day > 31) return undefined;
  const date = new Date(year, month, day);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

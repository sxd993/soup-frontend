export const getReviewWordByCount = (count: number): string => {
  const absCount = Math.abs(count)
  const lastTwoDigits = absCount % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "отзывов"
  }

  const lastDigit = absCount % 10

  if (lastDigit === 1) {
    return "отзыв"
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "отзыва"
  }

  return "отзывов"
}

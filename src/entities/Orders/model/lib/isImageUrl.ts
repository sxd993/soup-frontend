export const isImageUrl = (url: string): boolean =>
  /\.(jpe?g|png|gif|webp)(\?|$)/i.test(url) || /image\//i.test(url);

"use client";

type LogoImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

export const LogoImage = ({ src, alt, width, height }: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    decoding="async"
  />
);

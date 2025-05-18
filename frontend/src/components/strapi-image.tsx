import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import { StrapiImageProps } from "@/types/strapi"

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}
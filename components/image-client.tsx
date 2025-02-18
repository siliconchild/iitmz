"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageClientProps extends Omit<ImageProps, "src"> {
  src: string | StaticImport;
  fallbackSrc?: string;
  base64?: string;
}

export default function ImageClient({
  src,
  fallbackSrc = "/placeholder.jpg",
  base64,
  alt = "",
  ...rest
}: ImageClientProps) {
  const [imgSrc, setImgSrc] = useState<typeof src>(src);

  return (
    <Image
      {...rest}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      placeholder={base64 ? "blur" : "empty"}
      blurDataURL={base64}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}

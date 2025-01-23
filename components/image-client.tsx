"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function ImageClient(props: ImageProps & { fallbackSrc?: string; base64: string }) {
  if (!props.fallbackSrc) {
    props.fallbackSrc = `/placeholder.jpg`;
  }
  const { src, fallbackSrc, base64, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={imgSrc}
      placeholder={base64 ? "blur" : "empty"}
      blurDataURL={base64}
      alt={props.alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}

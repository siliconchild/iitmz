import Image, { ImageProps } from "next/image";
import getPlaceHolder from "@/lib/getPlaceHolder";

async function getPlaceHolderImage(src: string) {
  const { base64 } = await getPlaceHolder({ src });
  return base64;
}

export default async function Img(props: ImageProps) {
  if (typeof props.src === "string" && props.src.startsWith("https://")) {
    return <Image {...props} />;
  }
  const base64 = await getPlaceHolderImage(String(props.src));
  return <Image {...props} placeholder="blur" blurDataURL={base64} alt={props.alt || "image"} />;
}

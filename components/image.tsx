import { ImageProps } from "next/image";
import getPlaceHolder from "@/lib/getPlaceHolder";
import ImageClient from "./image-client";

// Pulsating SVG placeholder
const svgPlaceholder = `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#cccccc">
      <animate attributeName="opacity"
        values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </rect>
  </svg>
`;
// Encode the SVG as a base64 string
const encodedSvgPlaceholder = `data:image/svg+xml;base64,${Buffer.from(svgPlaceholder).toString("base64")}`;

async function getPlaceHolderImage(src: string) {
  try {
    const { base64 } = await getPlaceHolder({ src });
    return base64;
  } catch (error) {
    console.error(`Error fetching placeholder for image`);
    return "";
  }
}

export default async function Img(
  props: ImageProps & { fallbackSrc?: string; genericPlaceholder?: boolean },
) {
  const { src, fallbackSrc, genericPlaceholder, ...rest } = props;
  const base64 = genericPlaceholder ? encodedSvgPlaceholder : await getPlaceHolderImage(String(props.src));
  return <ImageClient {...rest} src={src} base64={base64} alt={props.alt} />;
}

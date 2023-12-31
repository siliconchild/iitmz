"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import styles from "./video-player.module.scss";

type VideoPlayerProps = {
  url: string;
  previewImage: string;
};

export default function VideoPlayer({ url, previewImage }: VideoPlayerProps) {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  // Only Render ReactPlayer on Client
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className={!previewLoaded ? styles.skelton : styles.bg}>
      {hasWindow && (
        <ReactPlayer
          url={url}
          light={
            <Image
              src={`data:image/png;base64,${previewImage}`}
              alt="Thumbnail Image"
              fill={true}
              style={{ objectFit: "cover" }}
              priority={true}
              onLoadingComplete={() => setPreviewLoaded(true)}
            />
          }
          height="100%"
          width="100%"
          playing={true}
          controls={true}
        />
      )}
    </div>
  );
}

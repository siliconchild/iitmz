"use client";
import "blaze-slider/dist/blaze.css";
import { ReactNode } from "react";
import { useBlazeSlider } from "react-blaze-slider";

export type SliderProps = {
  slidesToShow?: number;
  slidesToShowOnMobile?: number;
  slideGap?: string;
  enableAutoplay?: boolean;
  autoplayInterval?: number;
  loop?: boolean;
  showTracks?: boolean;
  children: ReactNode;
};

export default function Slider({
  children,
  slidesToShow = 1,
  slidesToShowOnMobile = 1,
  slideGap = "0px",
  loop = true,
  enableAutoplay = true,
  autoplayInterval = 4000,
  showTracks = false,
}: SliderProps) {
  const ref = useBlazeSlider({
    all: {
      slidesToShow,
      enableAutoplay,
      autoplayInterval,
      slideGap,
      loop,
    },
    "(max-width: 480px)": {
      slidesToShow: slidesToShowOnMobile,
    },
  });
  return (
    <div className="blaze-slider" ref={ref}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">{children}</div>
        </div>
        {showTracks && <div className="blaze-pagination"></div>}
      </div>
    </div>
  );
}

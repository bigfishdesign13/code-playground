import React, { CSSProperties } from "react";
import Image from "next/image";

const aspectRatioValues = {
  fourByOne: "25%",
  twoByOne: "50%",
  sixteenByNine: "56.25%",
  fourByThree: "75%",
  oneByOne: "100%",
  square: "100%",
  oneByTwo: "200%",
};
export const aspectRatioArray = [
  "fourByOne",
  "twoByOne",
  "sixteenByNine",
  "fourByThree",
  "oneByOne",
  "square",
  "oneByTwo",
] as const;

export type AspectRatioType = (typeof aspectRatioArray)[number];

const sizeValues = {
  auto: "auto",
  xs: "64px",
  sm: "96px",
  md: "128px",
  lg: "160px",
  xl: "256px",
  "2xl": "320px",
  "3xl": "640px",
};
export const sizeArray = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const;

export type SizeType = (typeof sizeArray)[number];

export const focalPointArray = ["top", "bottom", "left", "right"] as const;

export type FocalPointType = (typeof focalPointArray)[number];

export interface CustomImageProps {
  alt: string;
  aspectRatio?: AspectRatioType;
  backgroundColor?: CSSProperties["color"];
  border?: CSSProperties["border"];
  isCropped?: boolean;
  cropFocalPoint?: FocalPointType;
  size?: SizeType;
  src: string;
}

const CustomImage = (props: CustomImageProps) => {
  const {
    alt,
    aspectRatio = "square",
    backgroundColor = "#000000",
    border = "1px solid #333",
    isCropped = false,
    cropFocalPoint = undefined,
    size = "auto",
    src,
    ...rest
  } = props;

  return (
    <div style={{ width: sizeValues[size] }}>
      <div
        style={{
          background: backgroundColor,
          border: border,
          position: "relative",
          paddingBottom: aspectRatioValues[aspectRatio],
        }}
        {...rest}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          style={{
            objectFit: isCropped ? "cover" : "contain",
            objectPosition: isCropped ? cropFocalPoint : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default CustomImage;

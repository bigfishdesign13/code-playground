import React, { JSX } from "react";
import styles from "./Heading.styles";

export const headingSizesArray = [
  "display1",
  "display2",
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "subheading1",
  "subheading2",
] as const;
export const headingLevelsArray = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export const headingFontFamilyArray = ["default", "alt"] as const;

export type HeadingSizes = (typeof headingSizesArray)[number];
export type HeadingLevels = (typeof headingLevelsArray)[number];
export type HeadingFontFamily = (typeof headingFontFamilyArray)[number];

export interface HeadingProps {
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** The heading text. */
  children: string | JSX.Element;
  /** Optional font selection. */
  fontFamily?: HeadingFontFamily;
  /** Optional ID that other components can cross reference for accessibility
   * purposes */
  id?: string;
  /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed,
   * `Heading` will default to `<h2>` */
  level?: HeadingLevels;
  /** Optional size used to override the default styles of the native HTML `<h>`
   * elements */
  size?: HeadingSizes;
}

const Heading = (props: HeadingProps) => {
  const {
    className = "",
    children,
    id,
    fontFamily,
    level = "h2",
    size = "",
    ...rest
  } = props;
  const Tag = `${level}` as keyof JSX.IntrinsicElements;
  const finalFontFamily = fontFamily === "alt" ? "headingAlt" : "heading";

  let finalSize;

  switch (size) {
    case "display1": {
      finalSize = styles.display1;
      break;
    }
    case "display2": {
      finalSize = styles.display2;
      break;
    }
    case "heading1": {
      finalSize = styles.heading1;
      break;
    }
    case "heading2": {
      finalSize = styles.heading2;
      break;
    }
    case "heading3": {
      finalSize = styles.heading3;
      break;
    }
    case "heading4": {
      finalSize = styles.heading4;
      break;
    }
    case "heading5": {
      finalSize = styles.heading5;
      break;
    }
    case "heading6": {
      finalSize = styles.heading6;
      break;
    }
    case "subheading1": {
      finalSize = styles.subheading1;
      break;
    }
    case "subheading2": {
      finalSize = styles.subheading2;
      break;
    }
    default: {
      finalSize = styles.heading2;
      break;
    }
  }

  return (
    <Tag
      className={`${className} ${finalSize} font-${finalFontFamily}`}
      data-size={size}
      id={id}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Heading;

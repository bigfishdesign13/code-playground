import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import styles from "./ListCard.styles";

export const categoryArray = ["Container queries", "Images"] as const;
export type Category = (typeof categoryArray)[number];

export interface ListCardProps {
  /** String that adds an aria-label or appends to an existing aria-label for
   * screen readers.*/
  ariaLabel?: string;
  /** The example category. */
  category: Category;
  /** Optional string to add a CSS class to component's main wrapper. */
  className?: string;
  /** Optional string to add am ID that other components can cross reference for
   * accessibility purposes */
  id?: string;
  /** Path for the card's image. */
  // thumbnail: string;
  /** The page slug. */
  slug: string;
  /** A brief description of the project. */
  summary: string;
  /** The visible card title and default value for the aria-label. */
  title: string;
}

const ListCard = (props: ListCardProps) => {
  const { ariaLabel, category, className, id, slug, summary, title, ...rest } =
    props;
  const finalHref = `${slug}`;
  const finalAriaLabel = ariaLabel ? ariaLabel : title;

  return (
    <Link
      aria-label={finalAriaLabel}
      className={`${className} ${styles.wrapper}`}
      href={finalHref}
      id={id}
      {...rest}
    >
      {/* <Image
        alt={`${title} thumbnail`}
        aria-hidden
        className={image}
        height={480}
        src={thumbnail}
        width={480}
      /> */}
      <div className={styles.text}>
        <p className={styles.category}>{category}</p>
        <Heading
          className={styles.heading}
          fontFamily="alt"
          level="h2"
          size="heading5"
        >
          {title}
        </Heading>
        <p className={styles.summary}>{summary}</p>
      </div>
    </Link>
  );
};
export default ListCard;

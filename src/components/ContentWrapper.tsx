import React, { JSX } from "react";
import Heading from "@/components/Heading";
import styles from "./ContentWrapper.styles";

export interface ContentWrapperProps {
  /** The page content. */
  children: string | JSX.Element;
  /** Main page heading */
  pageTitle: string;
  /** Subheading (brief description) */
  subHeading?: string;
}

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children, pageTitle, subHeading = "", ...rest } = props;

  return (
    <div className={styles.page} {...rest}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Heading size="heading3" className={styles.heading}>
            {pageTitle}
          </Heading>
          <Heading level="h3" size="subheading1" className={styles.subheading}>
            {subHeading}
          </Heading>
        </header>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;

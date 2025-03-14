import React, { JSX } from "react";
import styles from "./GridWithSidebar.styles";

export interface GridWithSidebarProps {
  /** The page content. */
  top: JSX.Element;
  sidebar: JSX.Element;
  main: JSX.Element;
  bottom: JSX.Element;
}

const GridWithSidebar = (props: GridWithSidebarProps) => {
  const { top, sidebar, main, bottom, ...rest } = props;

  return (
    <div className={styles.gridWithSizebar} {...rest}>
      <div className={styles.top}>{top}</div>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.main}>{main}</div>
      <div className={styles.bottom}>{bottom}</div>
    </div>
  );
};

export default GridWithSidebar;

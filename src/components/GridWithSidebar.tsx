"use client";

import React, { JSX, useRef } from "react";
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
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // const el = document.getElementById("sidebar");
  // const observer = new window.IntersectionObserver(
  //   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  //   { threshold: [1] }
  // );

  // if (sidebarRef.current) observer.observe(sidebarRef.current);

  return (
    <div className={styles.gridWithSizebar} {...rest}>
      <div className={styles.top}>{top}</div>
      <div className={styles.sidebar} id="sidebar" ref={sidebarRef}>
        {sidebar}
      </div>
      <div className={styles.main}>{main}</div>
      <div className={styles.bottom}>{bottom}</div>
    </div>
  );
};

export default GridWithSidebar;

import React from "react";
// import Image from "next/image";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import Link from "next/link";
import styles from "./HomeLink.styles";

const HomeLink = () => {
  return (
    <div>
      <Link
        aria-label="Click for homepage"
        className={styles.wrapper}
        href="/"
        id="home-link"
      >
        <div className={styles.disc}></div>
        <AppsRoundedIcon className={styles.icon} />
      </Link>
    </div>
  );
};
export default HomeLink;

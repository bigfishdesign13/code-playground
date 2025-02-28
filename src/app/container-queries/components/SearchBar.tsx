import React from "react";
import Image from "next/image";
import styles from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <select className={styles.select}>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
        <div className={styles.search}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search for something"
          />
          <button className={styles.button} type="button">
            <Image
              alt="Search icon"
              height={24}
              layout="fixed"
              src="/icons/magnifyingGlass.svg"
              width={24}
            />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

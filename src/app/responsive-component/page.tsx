import { css } from "../../../styled-system/css";
// import Image from "next/image";
import Heading from "@/components/Heading";
import styles from "./page.styles";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <div
          className={css({
            maxWidth: "1280px",
            p: "1rem",
            width: "100%",
          })}
        >
          <header className={css({ mb: "2rem" })}>
            <Heading size="heading4">Responsive component</Heading>
            {/* <Heading level="h3" size="subheading1">
              How would a component using container queries resize and adjust
              over a range of viewports?
            </Heading> */}
          </header>

          <div className={styles.gridWithSizebarStyles}>
            <div className={styles.topStyles}>
              <Heading size="subheading1">Top</Heading>
              <SearchBar />
            </div>
            <div className={styles.sidebarStyles}>
              <Heading size="subheading1">Sidebar</Heading>
              <SearchBar />
            </div>
            <div className={styles.mainStyles}>
              <Heading size="subheading1">Main content area</Heading>
              <SearchBar />
            </div>
            <div className={styles.bottomStyles}>
              <Heading size="subheading1">Bottom</Heading>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

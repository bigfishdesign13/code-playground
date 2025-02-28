import { css } from "../../../../styled-system/css";
import Heading from "@/components/Heading";
import styles from "./page.styles";
import SearchBar from "../components/SearchBar";

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
            <Heading
              level="h3"
              size="subheading1"
              className={css({ maxWidth: "720px" })}
            >
              Can a component using container queries stay in sync with the
              underlying grid and columns?
            </Heading>
          </header>

          <div className={styles.gridWithSizebar}>
            <div className={styles.top}>
              <Heading size="subheading1">Top</Heading>
              <SearchBar />
            </div>
            <div className={styles.sidebar}>
              <Heading size="subheading1">Sidebar</Heading>
              <SearchBar />
            </div>
            <div className={styles.main}>
              <Heading size="subheading1">Main content area</Heading>
              <SearchBar />
            </div>
            <div className={styles.bottom}>
              <Heading size="subheading1">Bottom</Heading>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

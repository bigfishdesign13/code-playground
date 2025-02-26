import { css } from "../../../../styled-system/css";
import Heading from "@/components/Heading";
import styles from "./page.styles";
import Card from "../components/Card";

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
              <Card />
            </div>
            <div className={styles.sidebar}>
              <Card />
              <Card />
            </div>
            <div className={styles.main}>
              <div className={styles.stack}>
                <Card />
                <Card />
                <Card />
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.grid}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

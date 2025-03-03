import ContentWrapper from "@/components/ContentWrapper";
import styles from "./page.styles";
import Card from "../components/Card";

export default function Home() {
  return (
    <ContentWrapper
      pageTitle="Responsive card"
      subHeading="Can a component using container queries stay in sync with the underlying grid and columns?"
    >
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
    </ContentWrapper>
  );
}

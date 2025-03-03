import Heading from "@/components/Heading";
import ContentWrapper from "@/components/ContentWrapper";
import styles from "./page.styles";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <ContentWrapper
      pageTitle="Responsive search bar"
      subHeading="Can a component using container queries stay in sync with the underlying grid and columns?"
    >
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
    </ContentWrapper>
  );
}

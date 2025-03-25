import ContentWrapper from "@/components/ContentWrapper";
// import styles from "./page.styles";
import Card from "../components/Card";
import CardGrid from "@/components/CardGrid";
import GridWithSidebar from "@/components/GridWithSidebar";

export default function Home() {
  return (
    <ContentWrapper
      pageTitle="Responsive card"
      subHeading="Can a component using container queries stay in sync with the underlying grid and columns?"
    >
      <GridWithSidebar
        top={<Card />}
        sidebar={
          <>
            <Card />
            <Card />
          </>
        }
        main={
          <>
            <Card />
            <Card />
            <Card />
            <CardGrid>
              <Card />
              <Card />
              <Card />
            </CardGrid>
          </>
        }
        bottom={<Card />}
      />
    </ContentWrapper>
  );
}

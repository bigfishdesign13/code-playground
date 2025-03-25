import ContentWrapper from "@/components/ContentWrapper";
import Card from "../components/Card";
import CardGrid from "@/components/CardGrid";
import GridWithSidebar from "@/components/GridWithSidebar";
import Heading from "@/components/Heading";

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
            <Heading level="h3" size="heading5">
              Cards in a stack
            </Heading>
            <Card />
            <Card />
            <Card />
            <Heading level="h3" size="heading5">
              Cards in a grid
            </Heading>
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

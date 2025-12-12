import { css } from "../../../../styled-system/css";
import ContentWrapper from "@/components/ContentWrapper";
import GridWithSidebar from "@/components/GridWithSidebar";
import Heading from "@/components/Heading";

export default function Page() {
  return (
    <ContentWrapper
      pageTitle="Rest prop"
      subHeading="Experimenting with the rest prop"
    >
      <GridWithSidebar
        top={<></>}
        sidebar={<div className={css({})}></div>}
        main={
          <>
            <Heading level="h3" backgroundColor="red">
              This is the heading
            </Heading>
          </>
        }
        bottom={<></>}
      />
    </ContentWrapper>
  );
}

import { css } from "../../../../styled-system/css";
import ContentWrapper from "@/components/ContentWrapper";
import GridWithSidebar from "@/components/GridWithSidebar";

export default function Page() {
  return (
    <ContentWrapper
      pageTitle="Link protocols"
      subHeading="Testing the `tel` and `sms` link protocols."
    >
      <GridWithSidebar
        top={<></>}
        sidebar={<div className={css({})}></div>}
        main={
          <>
            <p>
              <a href="tel:19144131909">tel</a>
            </p>
            <p>
              <a href="sms:19144131909">sms</a>
            </p>
          </>
        }
        bottom={<></>}
      />
    </ContentWrapper>
  );
}

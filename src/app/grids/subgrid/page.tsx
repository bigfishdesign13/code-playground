import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import styles from "./page.styles";

export const metadata: Metadata = {
  title: "Subgrid | Code Playground",
  description: "Learning the specs of grid and subgrid",
};

export default function Page() {
  return (
    <ContentWrapper pageTitle="Subgrid" subHeading="Figuring this out.">
      <div className={styles.device}>
        <div className={styles.statusBar}></div>
        <div className={styles.app}>
          <div className={styles.nav}>
            <div className={styles.navContent}>
              <div>X</div>
              <div>Y</div>
            </div>
          </div>
          <div className={styles.header}></div>
          <div className={styles.main}>
            <Image
              width="720"
              height="720"
              src="https://picsum.photos/1024/1024"
              alt=""
            />
            <div className={styles.mainContent}>
              Curabitur blandit tempus porttitor. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
              dolor auctor. Cras mattis consectetur purus sit amet fermentum.
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas sed diam eget risus varius
              blandit sit amet non magna. Curabitur blandit tempus porttitor.
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
              purus sit amet fermentum. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
              diam eget risus varius blandit sit amet non magna.
            </div>
          </div>
          <div className={styles.footer}></div>
        </div>
        <div className={styles.gestureBar}></div>
      </div>
    </ContentWrapper>
  );
}

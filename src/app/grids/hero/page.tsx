import ContentWrapper from "@/components/ContentWrapper";
import styles from "./page.styles";

export default function Home() {
  return (
    <ContentWrapper
      pageTitle="Hero component"
      subHeading="Using a 12-column grid to handle the layout of the NYPL Hero Primary"
    >
      <div className={styles.breakout}>
        <div className={styles.wrapper}>
          <div className={styles.container} style={{ marginBottom: "2rem" }}>
            <div className={styles.blip}>1</div>
            <div className={styles.blip}>2</div>
            <div className={styles.blip}>3</div>
            <div className={styles.blip}>4</div>
            <div className={styles.blip}>5</div>
            <div className={styles.blip}>6</div>
            <div className={styles.blip}>7</div>
            <div className={styles.blip}>8</div>
            <div className={styles.blip}>9</div>
            <div className={styles.blip}>10</div>
            <div className={styles.blip}>11</div>
            <div className={styles.blip}>12</div>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Heading example</h2>
              <p className={styles.body}>
                Etiam porta sem malesuada magna mollis euismod. Curabitur
                blandit tempus porttitor. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

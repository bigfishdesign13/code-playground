import React from "react";
import Image from "next/image";
import styles from "./CardMedia.styles";
import Heading from "../../../components/Heading";

const CardMedia = () => {
  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <Image
          alt="Big Ben"
          src="/westminster-bridge-and-big-ben-london-uk.jpg"
          width={1024}
          height={1024}
          className={styles.image}
        />
        <div className={styles.text}>
          <Heading size="heading5">Westminster Bridge and Big Ben</Heading>
          <Heading level="h3" size="subheading1">
            Westminster Bridge offers views of Big Ben and the Houses of
            Parliament, a famous landmark complex in London.
          </Heading>
        </div>
      </div>
    </div>
  );
};
export default CardMedia;

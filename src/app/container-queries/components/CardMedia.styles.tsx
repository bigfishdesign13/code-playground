import { cq } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";

export const styles = {
  container: cq({ name: "cardContainer" }),
  image: css({
    borderRadius: { base: "8px", lg: "unset" },
    h: { base: "200px", sm: "300px", md: "200px", lg: "640px" },
    mb: ".5rem",
    objectFit: "cover",
    w: "100%",
  }),
  component: css({
    display: "block",
    position: "relative",
    width: "full",
    "& h2": { fontSize: "1.5rem", mb: ".5rem" },
    "& h3": { fontSize: "1rem" },
    "@container cardContainer (min-width: calc(480px - 2rem))": {
      "& h2": { fontSize: "2rem" },
      "& h3": { fontSize: "1.255rem" },
    },
    "@container cardContainer (min-width: calc(768px - 4rem))": {
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "1fr 2fr",
      "& h2": { fontSize: "2.25rem", mb: ".5rem" },
      "& h3": { fontSize: "1.375rem" },
    },
    "@container cardContainer (min-width: calc(1024px - 2rem))": {
      borderRadius: "8px",
      display: "block",
      overflow: "hidden",
      "& h2": { fontSize: "4rem" },
      "& h3": { fontSize: "1.625rem", maxWidth: "800px" },
    },
  }),
  text: css({
    "@container cardContainer (min-width: calc(480px - 2rem))": {},
    "@container cardContainer (min-width: calc(768px - 4rem))": {},
    "@container cardContainer (min-width: calc(1024px - 2rem))": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      bottom: "0",
      p: "1rem",
      position: "absolute",
      width: "100%",
    },
  }),
  // wrapper: css({
  //   display: "grid",
  //   gap: ".5rem",
  //   gridTemplateColumns: "1fr",
  //   "@container cardContainer (min-width: calc(480px - 2rem))": {
  //     gap: "0",
  //     gridTemplateColumns: "1fr 1fr",
  //   },
  //   "@container cardContainer (min-width: calc(768px - 4rem))": {
  //     gridTemplateColumns: "1fr 2fr",
  //   },
  //   "@container cardContainer (min-width: calc(1024px - 2rem))": {
  //     gridTemplateColumns: "1fr 3fr",
  //   },
  // }),
};

export default styles;

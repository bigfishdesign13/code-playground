import { css } from "../../styled-system/css";
import { cq } from "../../styled-system/patterns";

export const styles = {
  container: cq({ name: "cardGridContainer" }),
  grid: css({
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",
    "@container cardGridContainer (min-width: calc(480px - 2rem))": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@container cardGridContainer (min-width: calc(768px - 4rem))": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@container cardGridContainer (min-width: calc(1024px - 2rem))": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  }),
};

export default styles;

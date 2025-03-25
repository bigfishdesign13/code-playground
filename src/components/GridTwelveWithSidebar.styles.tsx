import { css } from "../../styled-system/css";
import { cq } from "../../styled-system/patterns";

const globalAreaStyles = {};

export const styles = {
  gridWithSidebar: css({
    display: "grid",
    // gap: { base: "1rem", md: "1.5rem", xl: "2rem" },
    gap: "2rem",
    gridTemplateAreas: {
      base: `"top" "sidebar" "main" "bottom"`,
      sm: `"top top" "sidebar main" "bottom bottom"`,
    },
    gridTemplateColumns: "repeat(12, 1fr)",
  }),
  top: css({
    gridArea: "top",
    gridColumn: "1 / -1",
    ...globalAreaStyles,
  }),
  sidebar: css({
    bg: "surface.primary/80",
    border: "1px solid",
    borderColor: "border.subtle",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    gridArea: "sidebar",
    gridColumn: { base: "1 / -1", sm: "1 / 7", md: "1 / 5", lg: "1 / 4" },
    p: "1rem",
    h: "100%",
    maxHeight: "100vh",
    overflow: "auto",
    ...globalAreaStyles,
  }),
  main: css({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    gridArea: "main",
    gridColumn: { base: "1 / -1", sm: "7 / 13", md: "5 / 13", lg: "4 / 13" },
    ...globalAreaStyles,
  }),
  bottom: css({
    gridArea: "bottom",
    gridColumn: "1 / -1",
    ...globalAreaStyles,
  }),

  stack: css({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  }),
  gridContainer: cq({ name: "gridContainer" }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    "@container gridContainer (min-width: calc(480px - 2rem))": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@container gridContainer (min-width: calc(768px - 4rem))": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "@container gridContainer (min-width: calc(1024px - 2rem))": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  }),
};

export default styles;

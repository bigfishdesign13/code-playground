import { css } from "../../../../styled-system/css";
import { cq } from "../../../../styled-system/patterns";

const globalAreaStyles = {};

const styles = {
  gridWithSizebar: css({
    display: "grid",
    // gap: { base: "1rem", md: "1.5rem", xl: "2rem" },
    gap: "2rem",
    gridTemplateAreas: {
      base: `"top" "sidebar" "main" "bottom"`,
      sm: `"top top" "sidebar main" "bottom bottom"`,
    },
    gridTemplateColumns: {
      base: "1fr",
      sm: "1fr 1fr",
      md: "1fr 2fr",
      lg: "1fr 3fr",
    },
  }),
  top: css({
    gridArea: "top",
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
    p: "1rem",
    ...globalAreaStyles,
  }),
  main: css({
    gridArea: "main",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    ...globalAreaStyles,
  }),
  bottom: css({
    gridArea: "bottom",
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

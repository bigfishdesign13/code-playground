import { css } from "../../../styled-system/css";

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
    gridArea: "sidebar",
    p: "1rem",
    ...globalAreaStyles,
  }),
  main: css({
    gridArea: "main",
    ...globalAreaStyles,
  }),
  bottom: css({
    gridArea: "bottom",
    ...globalAreaStyles,
  }),
};

export default styles;

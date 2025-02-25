import { css } from "../../../styled-system/css";

const globalAreaStyles = {
  bg: "surface.primary/80",
  p: "1rem",
};

const styles = {
  gridWithSizebarStyles: css({
    display: "grid",
    gap: { base: "1rem", md: "1.5rem", xl: "2rem" },
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
  topStyles: css({
    gridArea: "top",
    ...globalAreaStyles,
  }),
  sidebarStyles: css({
    gridArea: "sidebar",
    ...globalAreaStyles,
  }),
  mainStyles: css({
    gridArea: "main",
    ...globalAreaStyles,
  }),
  bottomStyles: css({
    gridArea: "bottom",
    ...globalAreaStyles,
  }),
};

export default styles;

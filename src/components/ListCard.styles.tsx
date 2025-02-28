import { css } from "../../styled-system/css";

const detailStyles = {
  bgColor: "surface.primary",
  borderColor: "border.loud",
  height: "",
  transform: "scale(1.5)",
  zIndex: "1",
};

export const styles = {
  category: css({
    fontSize: ".875rem",
    fontWeight: "700",
    textTransform: "uppercase",
  }),
  heading: css({ mb: ".5rem" }),
  image: css({
    w: "full",
    h: "80px",
  }),
  summary: css({
    // height: "0",
    // display: "none",
    // bg: "red",
    overflow: "hidden",
    transition: "height 250ms",
  }),
  text: css({
    p: "32px",
  }),
  wrapper: css({
    bgColor: "surface.primary/80",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "4px",
    p: "1rem",
    transition:
      "background-color 250ms, border-color 250ms, height 250ms, transform 250ms",
    _hover: {
      ...detailStyles,
      // "& p": {
      //   display: "block",
      // },
    },
    _focus: {
      ...detailStyles,
    },
  }),
};

export default styles;

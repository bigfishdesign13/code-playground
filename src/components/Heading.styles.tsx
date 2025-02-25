import { css } from "../../styled-system/css";

const globalStyles = {
  fontWeight: "700",
  letterSpacing: "-1px",
  lineHeight: "1.3",
};

export const styles = {
  display1: css({
    fontSize: "10rem",
    ...globalStyles,
  }),
  display2: css({
    fontSize: "9rem",
    ...globalStyles,
  }),
  heading1: css({
    fontSize: "8rem",
    ...globalStyles,
  }),
  heading2: css({
    fontSize: "7rem",
    ...globalStyles,
  }),
  heading3: css({
    fontSize: "6rem",
    ...globalStyles,
  }),
  heading4: css({
    fontSize: "4rem",
    ...globalStyles,
  }),
  heading5: css({
    fontSize: "2rem",
    ...globalStyles,
  }),
  heading6: css({
    fontSize: "1rem",
    ...globalStyles,
  }),
  subheading1: css({
    fontWeight: "500",
    fontSize: "1.5rem",
  }),
  subheading2: css({
    fontWeight: "500",
    fontSize: "1.375rem",
  }),
};

export default styles;

import { css } from "../../styled-system/css";

const globalStyles = {
  fontWeight: "700",
  letterSpacing: "-1px",
  lineHeight: "1.2",
};

export const styles = {
  display1: css({
    fontSize: { base: "9rem", md: "10rem" },
    ...globalStyles,
  }),
  display2: css({
    fontSize: { base: "8rem", md: "9rem" },
    ...globalStyles,
  }),
  heading1: css({
    fontSize: { base: "7rem", md: "8rem" },
    ...globalStyles,
  }),
  heading2: css({
    fontSize: { base: "6rem", md: "7rem" },
    ...globalStyles,
  }),
  heading3: css({
    fontSize: { base: "5rem", md: "6rem" },
    ...globalStyles,
  }),
  heading4: css({
    fontSize: { base: "3rem", md: "4rem" },
    ...globalStyles,
  }),
  heading5: css({
    fontSize: { base: "1.75rem", md: "2rem" },
    ...globalStyles,
  }),
  heading6: css({
    fontSize: "1rem",
    ...globalStyles,
  }),
  subheading1: css({
    fontSize: { base: "1.25rem", md: "1.5rem" },
    fontWeight: "500",
  }),
  subheading2: css({
    fontSize: { base: "1.125rem", md: "1.375rem" },
    fontWeight: "500",
  }),
};

export default styles;

import { cq } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";

const defaultHeight: string = "44px";

export const styles = {
  button: css({
    alignItems: "center",
    bg: "button",
    border: 0,
    display: "flex",
    fontSize: "16px",
    gap: ".25rem",
    h: defaultHeight,
    lineHeight: "1.0",
    px: ".5rem",
    py: ".5rem",
    w: defaultHeight,
    "& span": {
      display: "none",
      "@container searchBarContainer (min-width: calc(768px - 4rem))": {
        display: "block",
      },
    },
    _hover: {
      bg: "button.quiet",
    },
    _focus: {
      bg: "button.quiet",
    },
    "@container searchBarContainer (min-width: calc(768px - 4rem))": {
      px: "1rem",
      width: "unset",
    },
  }),
  container: cq({ name: "searchBarContainer" }),
  input: css({
    border: "1px solid",
    borderRight: "0",
    borderColor: "border",
    fontSize: "16px",
    flexGrow: "1",
    h: defaultHeight,
    paddingStart: ".5rem",
  }),

  search: css({
    display: "flex",
    width: "full",
  }),
  select: css({
    background: "none",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "0",
    // borderRight: { base: "1px solid", sm: "0" },
    // borderRight: "1px solid",
    h: defaultHeight,
    paddingStart: ".5rem",

    appearance: "none",
    backgroundImage:
      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.7rem top 50%",
    backgroundSize: "0.65rem auto",
    "-webkit-appearance": "none",
    "@container searchBarContainer (min-width: calc(480px - 4rem))": {
      borderRight: "0",
    },
  }),
  wrapper: css({
    display: "grid",
    // gap: { base: ".5rem", sm: "0" },
    // gridTemplateColumns: {
    //   base: "1fr",
    //   sm: "1fr 1fr",
    //   md: "1fr 2fr",
    //   lg: "1fr 3fr",
    // },
    gap: ".5rem",
    gridTemplateColumns: "1fr",
    "@container searchBarContainer (min-width: calc(480px - 4rem))": {
      gap: "0",
      gridTemplateColumns: "1fr 1fr",
    },
    "@container searchBarContainer (min-width: calc(768px - 4rem))": {
      gridTemplateColumns: "1fr 2fr",
    },
    "@container searchBarContainer (min-width: calc(1024px - 4rem))": {
      gridTemplateColumns: "1fr 3fr",
    },
  }),
};

export default styles;

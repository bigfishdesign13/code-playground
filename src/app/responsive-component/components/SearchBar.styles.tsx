import { cq } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";

const defaultHeight: string = "44px";

export const styles = {
  button: css({
    alignItems: "center",
    bg: "formElement",
    border: 0,
    display: "flex",
    fontSize: "16px",
    gap: ".25rem",
    h: defaultHeight,
    lineHeight: "1.0",
    px: ".5rem",
    py: ".5rem",
    transition: "background-color 250ms",
    w: defaultHeight,
    "& span": {
      display: "none",
      "@container searchBarContainer (min-width: calc(768px - 6rem))": {
        display: "block",
      },
    },
    _hover: {
      bg: "formElement.quiet",
    },
    _focus: {
      bg: "formElement.quiet",
    },
    "@container searchBarContainer (min-width: calc(768px - 6rem))": {
      px: "1rem",
      width: "unset",
    },
  }),
  container: cq({ name: "searchBarContainer" }),
  input: css({
    border: "1px solid",
    // borderRight: "0",
    borderColor: "border",
    fontSize: "16px",
    flexGrow: "1",
    h: defaultHeight,
    marginRight: "-1px",
    paddingStart: ".5rem",
    transition: "border-color 250ms",
    _hover: {
      borderColor: "border.loud",
      zIndex: 1,
    },
    _focus: {
      borderColor: "border.loud",
      zIndex: 1,
    },
  }),

  search: css({
    display: "flex",
    width: "full",
  }),
  select: css({
    background: "formElement/10",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "0",
    h: defaultHeight,
    paddingStart: ".5rem",
    transition: "border-color 250ms",

    appearance: "none",
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, white 50%), linear-gradient(135deg, white 50%, transparent 50%), linear-gradient(to right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25));",
    backgroundPosition:
      "calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "5px 5px, 5px 5px, 1px 1.5em",
    // "-webkit-appearance": "none",
    _hover: {
      borderColor: "border.loud",
      zIndex: 1,
    },
    _focus: {
      borderColor: "border.loud",
      zIndex: 1,
    },
    "@container searchBarContainer (min-width: calc(480px - 4rem))": {
      // borderRight: "0",
      marginRight: "-1px",
    },
  }),
  wrapper: css({
    display: "grid",
    gap: ".5rem",
    gridTemplateColumns: "1fr",
    "@container searchBarContainer (min-width: calc(480px - 2rem))": {
      gap: "0",
      gridTemplateColumns: "1fr 1fr",
    },
    "@container searchBarContainer (min-width: calc(768px - 4rem))": {
      gridTemplateColumns: "1fr 2fr",
    },
    "@container searchBarContainer (min-width: calc(1024px - 2rem))": {
      gridTemplateColumns: "1fr 3fr",
    },
  }),
};

export default styles;

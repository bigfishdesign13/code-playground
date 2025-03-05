import { css } from "../../../../styled-system/css";
// import { cq } from "../../../../styled-system/patterns";

const buttonBaseStyles = {
  fontSize: "2rem",
  color: "text.loud",
  cursor: "pointer",
  px: "1rem",
  py: ".5rem",
  width: "fit-content",
};

const styles = {
  container: css({
    background: "surface.primary",
    fontSize: "1.25rem",
    maxWidth: "800px",
    mt: "1rem",
    padding: "2rem",
    width: "100%",
    "& p": {
      mb: "1rem",
    },
  }),

  buttonGroup: css({
    display: "flex",
    gap: "1rem",
  }),

  menu: css({
    background: "surface.secondary",
    boxSizing: "border-box",
    padding: "2rem",
    height: "100vh",
    position: "fixed",
    top: "0",
    /* left: calc(100vw - 100px); */
    /* animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-direction: reverse;
        animation-play-state: running; */

    /* left: calc(100vw - 100px); */
    left: "100vw",
    width: "200px",
    transition: "left 250ms ease-in-out,width 250ms ease-in-out",
  }),
  pageTitle: css({
    fontFamily: "var(--font-barlow)",
    fontSize: "3rem",
    fontWeight: "700",
    margin: "0 0 1rem",
    color: "text.quiet",
    width: "fit-content",
  }),
  menuTitle: css({
    fontSize: "2rem",
    fontWeight: "500",
    margin: "0 0 1rem",
    color: "text.quiet",
    width: "fit-content",
  }),
  buttonPrimary: css({
    ...buttonBaseStyles,
  }),
  buttonSecondary: css({
    ...buttonBaseStyles,
    bgColor: "transparent",
    border: "1px solid",
    borderColor: "formElement",
    _hover: {
      bgColor: "formElement/20",
    },
  }),
};

export default styles;

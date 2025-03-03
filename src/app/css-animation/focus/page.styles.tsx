import { css } from "../../../../styled-system/css";
// import { cq } from "../../../../styled-system/patterns";

const styles = {
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
  menuTitle: css({
    fontSize: "2rem",
    fontWeight: "500",
    margin: "0 0 1rem",
    color: "text.quiet",
    width: "fit-content",
  }),
};

export default styles;

import { css } from "../../styled-system/css";

export const styles = {
  disc: css({
    bg: "white/20",
    borderRadius: "2rem",
    position: "absolute",
    top: "0",
    width: "4rem",
    height: "4rem",
  }),
  icon: css({
    position: "relative",
    fill: "white",
  }),
  wrapper: css({
    alignItems: "center",
    display: "flex",
    height: "4rem",
    justifyContent: "center",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    width: "4rem",
  }),
};

export default styles;

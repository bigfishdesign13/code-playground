import { css } from "../../styled-system/css";

export const styles = {
  page: css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  }),
  container: css({
    maxWidth: "1280px",
    p: "1rem",
    width: "100%",
  }),
  header: css({ mb: "2rem" }),
  heading: css({ mb: "1rem" }),
  subheading: css({ maxWidth: "720px" }),
};

export default styles;

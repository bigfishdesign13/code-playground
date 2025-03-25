import { css } from "../../../../styled-system/css";

const styles = {
  breakout: css({
    position: "relative",
    right: "50%",
    left: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    maxWidth: "100vw",
    width: "100vw",
  }),
  wrapper: css({
    backgroundImage: "url(/books.png)",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    py: "4rem",
  }),
  container: css({
    color: "white",
    display: "grid",
    gap: { base: "1rem", md: "1.5rem", xl: "2rem" },
    gridTemplateColumns: "repeat(12, 1fr)",
    maxWidth: "1280px",
    px: "1rem",
    width: "100%",
  }),
  content: css({
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    borderRadius: "8px",
    fontSize: "1.25rem",
    fontWeight: "400",
    gridColumn: { base: "1 / -1", md: "2 / 12", lg: "3 / 11" },
    p: "2rem",
  }),
  heading: css({
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.05",
    mb: "1rem",
    mt: "0",
  }),
  body: css({}),
  blip: css({
    bgColor: "black",
    // borderRadius: "24px",
    fontSize: ".875rem",
    fontWeight: "700",
    minWidth: "2px",
    textAlign: "center",
    textIndent: { base: "-9999", sm: "0" },
  }),
};

export default styles;

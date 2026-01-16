import { css } from "../../../../styled-system/css";

const sharedSubgridStyles = {
  display: "grid",
  gridTemplateRows: "subgrid",
  gridTemplateColumns: "subgrid",
};

const styles = {
  device: css({
    display: "grid",
    gridTemplateRows: `
      [system-status] 3.5rem
      [primary-nav] 3rem
      [primary-header] 4rem
      [main] auto
      [footer] 4rem
      [system-gestures] 2rem
    `,
    gridTemplateColumns: `[fullbleed-start] 1rem [main-start] auto [main-end] 1rem [fullbleed-end]`,

    borderRadius: "1rem",
    maxInlineSize: "380px",
    outline: "1rem solid black",
    overflow: "hidden",
    height: "720px",
    boxShadow: "0 0 16px 12px #ccc",
  }),
  statusBar: css({
    ...sharedSubgridStyles,
    bg: "#121212",
    gridArea: "system-status / fullbleed",
  }),
  gestureBar: css({
    ...sharedSubgridStyles,
    bg: "#121212",
    gridArea: "system-gestures / fullbleed",
  }),
  app: css({
    ...sharedSubgridStyles,
    gridArea: "primary-nav / fullbleed-start / system-gestures / fullbleed-end",
    bg: "black",
  }),
  nav: css({
    ...sharedSubgridStyles,
    alignItems: "center",
    bg: "#191919",
    gridArea: "primary-nav / fullbleed",
    justifyContent: "space-between",
  }),
  navContent: css({
    ...sharedSubgridStyles,
    alignItems: "center",
    gridArea: "main",
    justifyContent: "space-between",
    gridTemplateColumns: "auto auto",
  }),
  header: css({
    ...sharedSubgridStyles,
    bg: "#191919",
    gridArea: "primary-header / fullbleed",
    gridTemplateRows: "auto auto",
  }),
  main: css({
    ...sharedSubgridStyles,
    fontSize: "1.5rem",
    gridArea: "main / fullbleed",
    overflow: "auto",
    "& img": {
      gridArea: "fullbleed",
      maxInlineSize: "100%",
      blockSize: "auto",
    },
  }),
  mainContent: css({
    ...sharedSubgridStyles,
    gridArea: "main / main",
    pt: "1rem",
  }),
  footer: css({
    ...sharedSubgridStyles,
    bg: "red",
    gridArea: "footer / fullbleed",
  }),
};

export default styles;

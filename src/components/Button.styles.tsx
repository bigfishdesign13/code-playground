import { css } from "../../styled-system/css";

export const styles = {
  button: css({
    backgroundColor: "formElement",
    border: "0",
    color: "white",
    fontSize: "1.25rem",
    padding: "0.5rem 1rem",
    _hover: {
      backgroundColor: "formElement.loud",
    },
  }),
};

export default styles;

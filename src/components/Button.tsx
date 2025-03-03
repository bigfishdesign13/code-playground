import React, { JSX } from "react";
import styles from "./Button.styles";

export interface ButtonProps {
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** The heading text. */
  children: string | JSX.Element;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The action to perform on the `<button>`'s onClick function. */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const Button = (props: ButtonProps) => {
  const { className = "", children, onClick, ...rest } = props;

  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

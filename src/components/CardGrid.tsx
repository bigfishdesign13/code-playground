import React, { PropsWithChildren } from "react";
import styles from "./CardGrid.styles";

export interface CardGridProps {
  gap?: number;
}

const CardGrid: React.FC<PropsWithChildren<CardGridProps>> = (props) => {
  const { children, gap = 2, ...rest } = props;
  const finalGap = gap ? `${gap}rem` : "2rem";

  return (
    <div className={styles.container} {...rest}>
      <div className={styles.grid} style={{ gap: finalGap }}>
        {children}
      </div>
    </div>
  );
};
export default CardGrid;

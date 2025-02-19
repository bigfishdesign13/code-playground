import { css } from "../../styled-system/css";
// import Image from "next/image";

export default function Home() {
  return (
    <div
      className={css({
        fontSize: "3xl",
        fontWeight: "bold",
        color: "red",
        padding: "32px",
      })}
    >
      Code Playground
    </div>
  );
}

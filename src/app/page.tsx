import { css } from "../../styled-system/css";
// import Image from "next/image";
import ListCard from "@/components/ListCard";

export default function Home() {
  return (
    <>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <div className={css({ mt: "1rem", mb: "2rem", px: "2rem", width: "100%" })}>
          <h1>Code Playground</h1>
        </div>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
            maxWidth: "1280px",
            width: "100%",
          })}
        >
          <ListCard
            category="Container queries"
            slug="container-queries/searchbar"
            summary="Using container queries to align sizing with an underlying grid."
            title="Search bar example"
          />
          <ListCard
            category="Container queries"
            slug="container-queries/card"
            summary="Using container queries to align sizing with an underlying grid."
            title="Card example"
          />
        </div>
      </div>
    </>
  );
}

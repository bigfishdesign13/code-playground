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
        <div className={css({ my: "2rem", px: "2rem", width: "100%" })}>
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
            slug="container-queries/searchbar"
            summary="Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            title="Container queries: SearchBar"
          />
          <ListCard
            slug="container-queries/card"
            summary="Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            title="Container queries: Card"
          />
        </div>
      </div>
    </>
  );
}

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
            category="Images"
            slug="next-image/props"
            summary="A custom image component that utilizes the Next.js Image component at its core."
            title="Examples using Next.js Image component"
          />
          <ListCard
            category="Grids"
            slug="grids/subgrid"
            summary="Working through the specs of grid & subgrid."
            title="Learning subgrid"
          />
          <ListCard
            category="Grids"
            slug="grids/hero"
            summary="Using a 12-column grid to handle the layout of a hero component."
            title="Hero and grid"
          />
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
          <ListCard
            category="Container queries"
            slug="container-queries/card-on-twelve"
            summary="Using container queries to align sizing with a true 12-column grid."
            title="Card on true 12-column grid"
          />
          <ListCard
            category="CSS animation"
            slug="css-animation/focus"
            summary="Experimenting with an animated and transitional focus indicator."
            title="Focus animation"
          />
          <ListCard
            category="General"
            slug="general/link-protocols"
            summary="Testing tel and sms link protocols"
            title="Link protocols"
          />
          <ListCard
            category="General"
            slug="general/rest"
            summary="Experimenting with the rest prop"
            title="Rest prop"
            />
          <ListCard
            category="General CSS"
            slug="css-general/position-sticky"
            summary="Creating a compliant sidebar."
            title="Position sticky"
          />
        </div>
      </div>
    </>
  );
}

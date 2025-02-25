import { css } from "../../../styled-system/css";
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
        <div
          className={css({
            maxWidth: "1280px",
            width: "100%",
          })}
        >
          <ListCard
            slug="responsive-grid"
            summary="Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            title="Responsive grid"
          />
          <ListCard slug="marty" summary="Summary" title="Title" />
          <ListCard slug="marty" summary="Summary" title="Title" />
          <ListCard slug="marty" summary="Summary" title="Title" />
        </div>
      </div>
    </>
  );
}

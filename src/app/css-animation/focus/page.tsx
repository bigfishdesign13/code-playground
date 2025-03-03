"use client";

// import { useRef, useState } from "react";
import { RefObject, useRef } from "react";
import ContentWrapper from "@/components/ContentWrapper";
import styles from "./page.styles";
import Button from "@/components/Button";
import "./external.css";

export default function Home() {
  // const [isActive, setIsActive] = useState(false);
  const pageTitleRef = useRef<HTMLDivElement>(null);
  const menuTitleRef = useRef<HTMLDivElement>(null!);
  const boxRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const onClickHandler = () => {
    // pageTitleRef.current?.focus();
    setHeadingFocus({ headingRef: menuTitleRef, delay: 400 });
    boxRef.current?.classList.toggle("rotate");
    menuRef.current?.classList.add("open-menu");
    menuRef.current?.classList.toggle("close-menu");
    console.log("click");
  };

  interface SetHeadingFocusProps {
    headingRef: RefObject<HTMLHeadingElement>;
    delay: number;
  }
  const setHeadingFocus = (props: SetHeadingFocusProps) => {
    const { headingRef, delay = 0 } = props;
    setTimeout(() => {
      headingRef.current?.focus();
    }, delay);
  };

  // const animated = document.querySelector(".rotate");
  boxRef.current?.focus();
  const animationEndHandler = (event: AnimationEvent) => {
    console.log("Animation ended", event.animationName);
  };
  const animationCancelHandler = (event: AnimationEvent) => {
    console.log("Animation cancel", event.animationName);
  };
  boxRef.current?.addEventListener("animationend", animationEndHandler);
  boxRef.current?.addEventListener("animationend", animationCancelHandler);

  // animated.onanimationend = () => {
  //   console.log("Animation ended");
  //   box.classList.remove("rotate");
  // };
  // animated.onanimationcancel = () => {
  //   console.log("Animation canceled");
  //   // box.classList.remove("rotate");
  // };

  return (
    <>
      <ContentWrapper pageTitle="Focus animation" subHeading="">
        <>
          <div className="box rotate" id="div1" ref={boxRef} tabIndex={0}></div>
          <nav className={`close-menu ${styles.menu}`} id="menu" ref={menuRef}>
            <h2
              className={`special-focus ${styles.menuTitle}`}
              id="menu-title"
              ref={menuTitleRef}
              tabIndex={-1}
            >
              Menu Items
            </h2>
          </nav>
          <div id="container">
            <h1
              className="special-focus"
              id="page-title"
              ref={pageTitleRef}
              tabIndex={-1}
            >
              Page title
            </h1>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Praesent commodo <a href="#">cursus magna</a>, vel
              scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est
              at lobortis.
            </p>
            <p>
              Nulla vitae elit libero, a <a href="#">posuere</a> pharetra augue.
              Integer posuere erat a ante venenatis dapibus velit aliquet. Donec
              sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Etiam porta sem malesuada magna mollis
              euismod.
            </p>
            <Button id="btn" onClick={onClickHandler}>
              Submit
            </Button>
          </div>

          <div className="speckle speckle1"></div>
          <div className="speckle speckle2"></div>
          <div className="speckle speckle3"></div>
        </>
      </ContentWrapper>
    </>
  );
}

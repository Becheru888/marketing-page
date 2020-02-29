import React from "react";
import Nav from "../components/navigation";
import styled from "styled-components";
import gsap from "gsap";

function ProductPage() {
  const shadowDown =
    "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  const shadowUp =
    "0 20px 20px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)";

  const howMuchUp = -10;
  const howMuchDown = 10;

  return (
    <ThePage>
      <Nav />
      <section className="main-content">
        <div
          className="product-1"
          onMouseOver={e => {
            gsap.to(".product-1", {
              duration: 0.5,
              opacity: 1,
              boxShadow: `${shadowUp}`,
              backgroundColor: "white",
              y: howMuchUp,
              power1: 0.25
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-1", {
              duration: 1,
              opacity: 1,
              boxShadow: `${shadowDown}`,
              backgroundColor: "transparent",
              y: howMuchDown,
              power1: 0.25
            });
          }}
        ></div>
        <div
          className="product-2"
          onMouseOver={e => {
            gsap.to(".product-2", {
              duration: 0.5,
              opacity: 1,
              boxShadow: `${shadowUp}`,
              y: howMuchUp,
              backgroundColor: "white",
              power1: 0.25
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-2", {
              duration: 1,
              opacity: 1,
              boxShadow: `${shadowDown}`,
              y: howMuchDown,
              backgroundColor: "transparent",
              power1: 0.25
            });
          }}
        ></div>
        <div
          className="product-3"
          onMouseOver={e => {
            gsap.to(".product-3", {
              duration: 0.5,
              opacity: 1,
              boxShadow: `${shadowUp}`,
              backgroundColor: "white",
              y: howMuchUp,
              power1: 0.25
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-3", {
              duration: 1,
              opacity: 1,
              boxShadow: `${shadowDown}`,
              backgroundColor: "transparent",
              y: howMuchDown,
              power1: 0.25
            });
          }}
        ></div>
        <div
          className="product-4"
          onMouseOver={e => {
            gsap.to(".product-4", {
              duration: 0.5,
              opacity: 1,
              boxShadow: `${shadowUp}`,
              backgroundColor: "white",
              y: howMuchUp,
              power1: 0.25
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-4", {
              duration: 1,
              opacity: 1,
              boxShadow: `${shadowDown}`,
              backgroundColor: "transparent",
              y: howMuchDown,
              power1: 0.25
            });
          }}
        ></div>
      </section>
    </ThePage>
  );
}

export default ProductPage;

const ThePage = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100%;

  .main-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    z-index: 2;

    .product-1,
    .product-2,
    .product-3,
    .product-4 {
      font-family: "Montserrat";
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border: 2px solid white;
      margin: 50px 100px;
      border-radius: 5px;
      width: 30%;
      height: 300px;
    }
  }
`;

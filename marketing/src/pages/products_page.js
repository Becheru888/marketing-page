import React from "react";
import Nav from "../components/navigation";
import styled from "styled-components";
import Footer from "../components/footer";
import gsap from "gsap";
import img from "../assets/appDev.svg";

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
        {/* <div
          className="product-1"
          onMouseOver={e => {
            gsap.to(".product-1", {
              duration: 0.6,
              boxShadow: `${shadowUp}`,
              backgroundColor: "white",
              y: howMuchUp
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-1", {
              duration: 0.6,
              boxShadow: `${shadowDown}`,
              y: howMuchDown
            });
          }}
          style={{ backgroundImage: `${img}` }}
        ></div>
        <div
          className="product-2"
          onMouseOver={e => {
            gsap.to(".product-2", {
              duration: 0.6,
              boxShadow: `${shadowUp}`,
              y: howMuchUp
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-2", {
              duration: 0.6,
              boxShadow: `${shadowDown}`,
              y: howMuchDown
            });
          }}
        ></div>
        <div
          className="product-3"
          onMouseOver={e => {
            gsap.to(".product-3", {
              duration: 0.6,
              boxShadow: `${shadowUp}`,
              y: howMuchUp
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-3", {
              duration: 0.6,
              boxShadow: `${shadowDown}`,
              y: howMuchDown
            });
          }}
        ></div>
        <div
          className="product-4"
          onMouseOver={e => {
            gsap.to(".product-4", {
              duration: 0.6,
              boxShadow: `${shadowUp}`,
              y: howMuchUp
            });
          }}
          onMouseLeave={e => {
            gsap.to(".product-4", {
              duration: 0.6,
              boxShadow: `${shadowDown}`,
              y: howMuchDown
            });
          }}
        ></div> */}
      </section>
      <Footer />
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
      margin: 50px 10px;
      background-color: white;
      border-radius: 5px;
      width: 45%;
      height: 300px;
    }
  }
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/navigation";
import img from "../assets/icons.svg";
import gsap from "gsap";

function Landing() {
  useEffect(() => {
    gsap.to(".make", {
      duration: 2,
      opacity: 1,
      power1: 0.25
    });
  });

  return (
    <ThePage>
      <Nav />
      <div>
        <header>
          <p className="statemant">
            <span className="make">MAKE </span>
            <span className="your">YOUR</span>
            <br />
            <span className="business">BUSINESS </span>
            <span className="easyer">EASYER</span>
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            rhoncus nulla. Maecenas sem lorem, aliquam fermentum metus et,
            ultricies luctus augue. Curabitur aliquet maximus interdum. Nam
            congue dictum fermentum.
          </p>
        </header>
        <section className="soft-png">
          <img srcSet={`${img}`} alt="business-flow"></img>
        </section>
      </div>
    </ThePage>
  );
}

export default Landing;

const ThePage = styled.div`
  position: relative;
  min-height: 100%;
  div {
    display: flex;

    .soft-png {
      img {
        margin-left: 120px;
        position: absolute;
        width: 40%;
        height: 600px;
      }
    }
  }

  div > header {
    display: flex;
    flex-flow: column;
    margin-top: 100px;
    width: 50%;

    .statemant {
      font-size: 4em;
      font-family: "Montserrat";
      color: white;
      line-height: normal;
      .make,
      .business {
        font-weight: bold;
      }

      .your,
      .easyer {
        font-weight: lighter;
      }
    }

    .description {
      margin-top: 30px;
      width: 70%;
      font-family: "Montserrat";
      font-weight: lighter;
      color: white;
    }
  }
`;

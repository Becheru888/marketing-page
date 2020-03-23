import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/navigation";
import Footer from "../components/footer";
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

  const shadowDown =
    "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  const shadowUp =
    "0 20px 20px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)";

  const howMuchUp = -2;
  const howMuchDown = 2;

  const hooverOn = () => {
    gsap.to(".button", {
      duration: 0.6,
      boxShadow: `${shadowUp}`,
      y: howMuchUp
    });
  };

  const hooverOff = () => {
    gsap.to(".button", {
      duration: 0.6,
      boxShadow: `${shadowDown}`,
      y: howMuchDown
    });
  };

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
            Creăm un software conștient care conectează totul la orice altceva.
            Ne alăturăm punctelor dintre date, proces și rezultatele afacerii,
            astfel încât să vă puteți concentra pe luarea deciziilor care îți
            cresc afacerea.
          </p>
          <Link
            className="button"
            to="/contact"
            onMouseOver={e => hooverOn()}
            onMouseLeave={e => hooverOff()}
          >
            <p className="contact-link">Contacteaza-ne!</p>
          </Link>
        </header>
        <section className="soft-png">
          <img srcSet={`${img}`} alt="business-flow"></img>
        </section>
      </div>
      <Footer />
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

    a {
      margin-top: 30px;
      height: 50px;
      text-decoration: none;
      width: 20%;
      border-radius: 20px;
      background-color: rgba(7, 119, 237, 1);
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      p {
        text-align: center;
        padding: 13px;
      }
    }

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
      font-size: 1.2rem;
    }
  }
`;

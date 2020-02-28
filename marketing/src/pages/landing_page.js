import React from "react";
import styled from "styled-components";
import Nav from "../components/navigation";

function Landing() {
  return (
    <ThePage>
      <Nav />
      <header>
        <p className="statemant">
          <span className="make">MAKE </span>
          <span className="your">YOUR</span>
          <br />
          <span className="business">BUSSINES </span>
          <span className="easyer">EASYER</span>
        </p>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          rhoncus nulla. Maecenas sem lorem, aliquam fermentum metus et,
          ultricies luctus augue. Curabitur aliquet maximus interdum. Nam congue
          dictum fermentum.
        </p>
      </header>
    </ThePage>
  );
}

export default Landing;

const ThePage = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100%;

  header {
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

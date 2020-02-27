import React from "react";
import styled from "styled-components";
import Nav from "../components/navigation";
import Footer from "../components/footer";

function Landing() {
  return (
    <ThePage>
      <Nav />
      <h1>Landing Page</h1>
      {/* <div className="footer">
        <Footer />
      </div> */}
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

  .footer {
    border: 2px solid red;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
  }
`;

import React from "react";
import Nav from "../components/navigation";
import styled from "styled-components";
import Footer from "../components/footer";

function ServicesPage() {
  return (
    <ThePage>
      <Nav />
      <Div>
        <h1>Services Page</h1>
      </Div>
      {/* <div className="footer">
        <Footer />
      </div> */}
      <Footer />
    </ThePage>
  );
}

export default ServicesPage;

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

const Div = styled.div`
  border: 2px solid red;
  margin: 100px auto;
  width: 400px;
  display: flex;
  justify-content: center;
`;

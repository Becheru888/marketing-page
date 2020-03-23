import React from "react";
import Nav from "../components/navigation";
import styled from "styled-components";
import Footer from "../components/footer";

function AboutPage() {
  return (
    <ThePage>
      <Nav />
      <AboutContent>
        <section className="about-content">
          <h1>About Page</h1>
        </section>
      </AboutContent>
      {/* <section className="footer">
        <Footer />
      </section> */}
      <Footer />
    </ThePage>
  );
}

export default AboutPage;

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

const AboutContent = styled.div`
  border: 2px solid red;
  margin: 100px auto;
  width: 400px;
  display: flex;
  justify-content: center;
`;

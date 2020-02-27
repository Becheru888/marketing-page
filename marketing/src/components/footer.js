import React from "react";
import styled from "styled-components";
import "../assets/wave.png";

function Footer() {
  return (
    <Section>
      <h1>Hei</h1>
    </Section>
  );
}

export default Footer;

const Section = styled.div`
  border: 2px solid red;
  position: relative;
  background: linear-gradient(90deg, #f0027f, #75489f);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 200px;
    background: url(wave.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

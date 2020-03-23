import React from "react";
import Nav from "../components/navigation";
import styled from "styled-components";
import Form from "../components/contact_compo/contact_form";
import Footer from "../components/footer";

function ContactPage() {
  return (
    <ThePage>
      <Nav />
      <Form />
      <Footer />
    </ThePage>
  );
}

export default ContactPage;

const ThePage = styled.div`
  color: white;
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

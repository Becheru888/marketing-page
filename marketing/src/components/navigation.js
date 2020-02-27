import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <Div>
      <h4>
        Company <span className="Company">Name</span>
      </h4>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/products">
            <span>Product</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Div>
  );
}

export default Nav;

const Div = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  border-radius: 10px;

  h4 {
    font-weight: 900;
    color: white;

    .Company {
      font-weight: 1;
    }
  }

  a {
    margin: 0 5px;
    font-size: 1.1em;
    color: white;
    transition: border-radius 0.2s;

    &:hover {
      opacity: 0.5;
      border-right: 2px solid white;
      border-left: 2px solid white;
      border-radius: 20px;
    }
  }
`;

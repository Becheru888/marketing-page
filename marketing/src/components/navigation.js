import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ovlogo from "../assets/ovlogo.png";

function Nav() {
  return (
    <Div>
      <div className="logo">
        <div className="icon">
          <div className="level-1"></div>
          <div className="level-2"></div>
          <div className="level-3"></div>
          <div className="level-4"></div>
        </div>
        <h5>Omnia Visible</h5>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            <span>Acasa</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/products">
            <span>Produse</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Servicii
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            Despre Noi
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
  padding: 20px 0 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  border-radius: 6px;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      width: 50px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .level-1,
      .level-2,
      .level-3,
      .level-4 {
        width: 80%;
        height: 5px;
        background-color: white;
        margin: 0 auto;
      }

      .level-1 {
        /* background-color: #ede9e9; */
        opacity: 0.25;
      }
      .level-2 {
        /* background-color: #c3c3c3; */
        opacity: 0.5;
      }
      .level-3 {
        /* background-color: #8c8b8b; */
        opacity: 0.75;
      }
      .level-4 {
        /* background-color: #282828; */
        opacity: 1;
      }
    }

    h5 {
      color: white;
      font-family: "Montserrat";
      margin: 0;
    }
  }

  h4 {
    font-weight: 900;
    color: white;
    .Company {
      font-weight: 1;
    }
  }
  a {
    border: 2px solid transparent;
    margin: 0 5px;
    font-size: 1.1em;
    color: white;
    transition: border-radius 0.5s;

    &:hover {
      opacity: 0.5;
      border-right: 2px solid white;
      border-left: 2px solid white;
      border-radius: 20px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import gsap from "gsap";

function Footer() {
  function hooverOn(e) {
    if (e.target.name === "instagram") {
      gsap.to(".insta-link", {
        duration: 1,
        opacity: 1,
        x: 15
      });
    } else if (e.target.name === "facebook") {
      gsap.to(".facebook-link", {
        duration: 1,
        opacity: 1,
        x: 15
      });
    } else if (e.target.name === "twitter") {
      gsap.to(".twitter-link", {
        duration: 1,
        opacity: 1,
        x: 15
      });
    }
  }

  function hooverOff(e) {
    if (e.target.name === "instagram") {
      gsap.to(".insta-link", {
        duration: 1,
        opacity: 0,
        x: -20
      });
    } else if (e.target.name === "facebook") {
      gsap.to(".facebook-link", {
        duration: 1,
        opacity: 0,
        x: -20
      });
    } else if (e.target.name === "twitter") {
      gsap.to(".twitter-link", {
        duration: 1,
        opacity: 0,
        x: -20
      });
    }
  }

  return (
    <Section>
      <div className="social-icons">
        <div
          className="icon insta"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
            alt="instagram icon"
            name="instagram"
          />
          <p className="insta-link">Instagram link</p>
        </div>
        <div
          className="icon"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"
            alt="facebook icon"
            name="facebook"
          />
          <p className="facebook-link">Facebook link</p>
        </div>
        <div
          className="icon"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/cute-clipart/64/000000/twitter.png"
            alt="icon"
            name="twitter"
          />
          <p className="twitter-link">Twitter link</p>
        </div>
      </div>
    </Section>
  );
}

export default Footer;

const Section = styled.div`
  height: 300px;
  min-width: 80%;
  position: absolute;
  z-index: 2;
  bottom: 0;
  display: flex;

  .social-icons {
    display: flex;
    flex-direction: column;
    margin: 80px 0 0 50px;

    .icon {
      border-radius: 10px;
      margin: 5px;

      p {
        margin-top: 10px;
        opacity: 0;
      }

      img {
        width: 54px;
        height: 54px;
      }
    }
  }
`;

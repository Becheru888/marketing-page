import React from "react";
import styled from "styled-components";
import gsap from "gsap";

function Footer() {
  function hooverOn(e) {
    if (e.target.name === "instagram") {
      gsap.to(".insta-link", {
        display: "inline",
        duration: 1,
        opacity: 1,
        x: 10
      });
    } else if (e.target.name === "facebook") {
      gsap.to(".facebook-link", {
        duration: 1,
        opacity: 1,
        x: 10
      });
    } else if (e.target.name === "twitter") {
      gsap.to(".twitter-link", {
        duration: 1,
        opacity: 1,
        x: 10
      });
    }
  }

  function hooverOff(e) {
    gsap.to(".icons", {
      duration: 1,
      opacity: 0,
      x: -20
    });
  }

  return (
    <Section>
      <div className="social-icons">
        <div
          className="icon"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/nolan/64/instagram-new.png"
            alt="instagram icon"
            name="instagram"
          />
          <a
            href="https://www.instagram.com/omniavisible/"
            className="insta-link icons"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div
          className="icon"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/nolan/64/facebook-new.png"
            alt="facebook icon"
            name="facebook"
          />
          <a
            href="https://www.facebook.com/Omnia-Visible-111085847198157/"
            className="facebook-link icons"
            target="_blank"
          >
            Facebook
          </a>
        </div>
        <div
          className="icon"
          onMouseOver={e => hooverOn(e)}
          onMouseLeave={e => hooverOff(e)}
        >
          <img
            src="https://img.icons8.com/nolan/64/twitter-squared.png"
            alt="icon"
            name="twitter"
          />
          <a
            href="https://www.twitter.com/OmniaVisible/"
            className="twitter-link icons"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Footer;

const Section = styled.div`
  min-width: 100%;
  height: 260px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  display: flex;

  .social-icons {
    display: flex;
    flex-direction: column;
    height: 156px;
    margin: 70px 0 0 50px;
    border-left: 2px solid rgba(227, 169, 107, 1);
    border-radius: 10px;

    .icon {
      border-radius: 10px;
      margin: 5px;
      display: flex;

      a {
        position: relative;
        margin: 10px 0 0 10px;
        opacity: 0;
        text-decoration: none;
      }

      img {
        width: 44px;
        height: 44px;
      }
    }
  }
`;

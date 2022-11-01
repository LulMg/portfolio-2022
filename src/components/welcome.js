import React, { useState } from "react";
import { Parallax, Background } from "react-parallax";
import "../styles/welcome.css";
//images
import stars from "../images/stars.png";
import moon from "../images/moon.png";
import base from "../images/base.png";
import dune from "../images/dune.png";

export function Welcome() {
  const [offset, setOffset] = useState();

  const handleScroll = () => setOffset(window.scrollY);

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Parallax strength={500}>
        <Background>
          <div
            style={{
              height: "100vh",
              width: "900vh",
              backgroundImage: `url(${stars})`,
            }}
          />
        </Background>
        <div>
          <section id="welcome">
            <img
              src={moon}
              id="moon"
              alt="moon"
              style={{ top: `${-4 + offset * 0.08 + "%"}` }}
            />
            <h2 id="text" style={{ top: `${40 + offset * 0.1 + "%"}` }}>
              LAURA MARIN
            </h2>
            <h3 id="fStitle" style={{ top: `${40 + offset * 0.1 + "%"}` }}>
              Full Stack Developer
            </h3>
            <a href="#explore" className="btn" id="btnName">
              Explore
            </a>
            <img
              src={dune}
              id="dune"
              alt="dune"
              style={{ top: `${-1 + offset * 0.02 + "%"}` }}
            />
            <img src={base} id="base" alt="base" />
          </section>
        </div>
      </Parallax>
    </div>
  );
}

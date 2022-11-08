import React from "react";
import { BotonPurp, BotonW, BotonY } from "./boton";
import "../styles/navbar.css";
import logo from "../images/logo.png";

export function NavBar() {

  return (
    <nav className="navbar sticky-top">
      <div className="container lol">
        <a className="navbar-brand" href="#">
          <span className="d-flex">
            <img src={logo} alt="logo"></img>
            <h1 id="l" className="mx-1">
              LuLMg
            </h1>
          </span>
        </a>
        <span className="navbar-text">
          <a href="#explore">
            <BotonPurp title="ABOUT" />
          </a>
          <a href="#portfolioTitle">
            <BotonW title="PORTFOLIO" />
          </a>
          <a href="#contact">
            <BotonY title="CONTACT" />
          </a>
        </span>
      </div>
    </nav>
  );
}

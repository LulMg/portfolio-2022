import React, {useState} from "react";
import { BotonPurp, BotonW, BotonY } from "./boton";
import "../styles/navbar.css";
import logo from "../images/logo.png";
import HamburguerButton from "./hamburguerButton";

export function NavBar() {
  const [active, setActive] = useState(false)
  const handleClick = () =>{
    setActive(!active)
  }
  return (
    <nav className="sticky-top">
      <div className="container lol">
        <a className="navbar-brand" href="#">
          <span className="logo">
            <img src={logo} alt="logo"></img>
            <h1 id="l" className="mx-1">
              LuLMg
            </h1>
          </span>
        </a>
        <span className={`navbar-text botones ${active ? 'active' : ''}`}>
          <div className="links">
            <a onClick={handleClick} href="#explore">
              <BotonPurp title="ABOUT" />
            </a>
            <a onClick={handleClick} href="#portfolioTitle">
              <BotonW title="PORTFOLIO" />
            </a>
            <a onClick={handleClick} href="#contact">
              <BotonY title="CONTACT" />
            </a>
          </div>
        </span>
      </div>
        <div className="burguerButton">
          <HamburguerButton active={active} handleClick = {handleClick}/>
        </div>
    </nav>
  );
}

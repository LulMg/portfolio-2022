import React from "react";
import "../styles/hamburguerButton.css";

function HamburguerButton(props) {
  return (
    <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.active ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburguerButton;

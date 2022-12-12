import React from "react";
import "../styles/card.css";
import { BotonY } from "./boton";

export const Card = (props) => {
  return (
    <div className="flip-card-container">
  <div className="flip-card">

    <div className="card-front">
      <figure>
        <div className="img-bg"></div>
        <img src={props.ima} alt="projectImg" id="image"/>
      </figure>
    </div>

    <div className="card-back">
      <div className="title">
        <h1>{props.project}</h1>
      </div>
      <a href={props.refe} target="_blank">
        <BotonY
        title={props.buttonTitle}
        />
      </a>
    </div>

  </div>
</div>

  );
};

    
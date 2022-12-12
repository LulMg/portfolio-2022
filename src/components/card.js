import React from "react";
import "../styles/card.css";
import { BotonY } from "./boton";

export const Card = (props) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <img src={props.ima} alt="projectImg" id="image" />
        </div>

        <div className="card-back">
          <div className="title">
            <img src={props.ima} alt="projectImg" id="backImage" />
            <div className="seeMore">
              <h1 className="moreh1">{props.project}</h1>
              <a href={props.refe} target="_blank">
                <BotonY title={props.buttonTitle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

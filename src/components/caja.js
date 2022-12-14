import React from "react";
import "../styles/caja.css";

export const Caja = (props) => {
  return (
    <div className="caja rounded">
      <div className="mainCaja text-center">
        <img src={props.img} alt="portfolioImg" />
      </div>
      <div className="overlayContent py-3">
        <p className="text-dark text-center">{props.description}</p>
      </div>
    </div>
  );
};

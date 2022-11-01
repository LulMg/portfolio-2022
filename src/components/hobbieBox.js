import React from "react";
import "../styles/hobbie.css";

export function Hobbie(props) {
  return (
    <div className="bodyHobb rounded">
      <div className="text-center rounded p-1" id="hobbieStyle">
        <div className="bor">{props.nameIcon}</div>
        <div className="bor mt-1 bg-light text-center">
          <p className="textIcon">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

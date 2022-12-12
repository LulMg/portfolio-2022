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
        <img src={props.img} alt="projectImg" id="image"/>
        <figcaption>{props.projectName}</figcaption>
      </figure>
      <h1 className="text-light">holiiii</h1>
    </div>

    <div className="card-back">
      <figure>
        <div className="img-bg"></div>
      </figure>

      <button>Book</button>
    </div>

  </div>
</div>

  );
};

    {/* <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner mx-5">
        <div className="carousel-item active bigBox">
          <a href="https://github.com/LulMg/Page-w-React.git">
            <img src={papP} className="d-block papiro" alt="papP" />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/Stranger-films.git">
            <img src={pap1} className="d-block papiro" alt="..." />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/toDoList-w-fetch.git">
            <img src={papTo} className="d-block papiro" alt="..." />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/card-generator.git">
            <img src={papCard} className="d-block papiro" alt="..." />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/Instagram-feed.git">
            <img src={papFeed} className="d-block papiro" alt="..." />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/token.git">
            <img src={papTok} className="d-block papiro" alt="..." />
          </a>
        </div>
        <div className="carousel-item bigBox">
          <a href="https://github.com/LulMg/starWars-flux.git">
            <img src={papsw} className="d-block papiro" alt="..." />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev pe-5"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        <span className="flechas pe-5 me-5">
          <BotonY title="previous" />
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span aria-hidden="true"></span>
        <span className=" ms-5 ps-5 flechas">
          <BotonY title="next" />
        </span>
      </button>
    <div/> */}
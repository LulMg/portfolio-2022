import React from "react";
import "../styles/carousel.css";
import { BotonY } from "./boton";
//IMAGES
import papP from "../images/papaPage.png";
import papTo from "../images/papaTodo.png";
import papCard from "../images/papCard.png";
import papFeed from "../images/papfeed.png";
import pap1 from "../images/papiro-01.png";
import papTok from "../images/paptokenn-01.png";
import papsw from "../images/papsw-01.png";

export const Carousel = () => {
  return (
    <div
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
    </div>
  );
};

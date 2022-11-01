import React from "react";
import "./styles/App.css";
import resume from "./CV/Resume.pdf";

//IMAGES
import avatar from "./images/avatar.jpeg";
import html from "./images/html-icon.png";
import css from "./images/css-icon.webp";
import boots from "./images/boots-icon.png";
import js from "./images/js-icon.png";
import react from "./images/react-icon.png";
import flask from "./images/flask-icon.png";
import python from "./images/python-icon.webp";
import mysql from "./images/mysql-icon.png";
import git from "./images/git-logo.png";
import sw from "./images/swPage1.png";
import token from "./images/tokenPage1.png";
import sf from "./images/sfPage1.png";
import toDo from "./images/toDoList.PNG";
import insta from "./images/Captura.PNG";
import card from "./images/cardGenerator.PNG";
import post from "./images/post.PNG";
import page from "./images/pageReact.PNG";

//COMPONENTES
import * as components from "./components";

function App() {
  return (
    <div className="App" >
      <div>
        <components.Welcome />
      </div>

    <div className="fill pt-4">

      <components.NavBar/>
      <div className="bodyPart">
        <div>
          <h1 className="about text-center m-5" id="explore">
            ABOUT ME
          </h1>
          <div className="container p-2 rounded" id="bgMain">
            <div className="d-flex p-5" id="bgAboutMe">

                <div className="d-flex flex-column justify-content-center">
                  <div>
                    <components.Hobbie
                      nameIcon={<i className="fa-solid fa-plane fa-2x m-1"></i>}
                      text={"traveling"}
                    />
                  </div>
                  <div className="mt-2">
                    <components.Hobbie
                      nameIcon={<i className="fa-solid fa-tree fa-2x m-1"></i>}
                      text={"nature"}
                    />
                  </div>
                  <div className="mt-2">
                    <components.Hobbie
                      nameIcon={
                        <i className="fa-solid fa-graduation-cap fa-2x m-1"></i>
                      }
                      text={"books"}
                    />
                  </div>
                  <div className="mt-2">
                    <components.Hobbie
                      nameIcon={
                        <i className="fa-solid fa-paintbrush fa-2x m-1"></i>
                      }
                      text={"drawing"}
                    />
                  </div>
                </div>
              <span className="aboutMeSec text-center">
                <img src={avatar} alt="avatar" />

                    <a href={resume} className="btn mt-2" id="cv">
                      <span className="d-flex justify-content-center">
                        <span className="me-3">
                          <i className="fa-solid fa-file fa-lg"></i>
                        </span>
                        <h6>RESUME (CV)</h6>
                        <br />
                      </span>
                    </a>
              </span>

              <div className="d-flex align-items-center">
                <div className="aboutTexto mx-5">
                  <h1 className="text-center my-5" id="hello">
                    Hello World!
                  </h1>
                  <div className="">
                    <p>
                      I'm Laura Marín, a<span className="FullStk"> Full Stack developer </span>
                      highly passionate and a hard worker.<br/>
                      High attention to detail, well-organized, naturally curious, interested 
                      about technology and working on awesome projects with awesome people.<br/>
                      <br/><span className="FullStk">Let's make it real!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center m-4">
              <h1 id="skill">SKILL SET</h1>
            </div>
            <div className="bg-gradient text-center mb-5 p-3" id="skillBg">
              <img src={html} alt="html" />
              <img src={css} alt="html" />
              <img src={boots} alt="html" />
              <img src={js} alt="html" />
              <img src={react} alt="html" />
              <img src={flask} alt="html" />
              <img src={python} alt="html" />
              <img src={mysql} alt="html" />
              <img src={git} alt="html" />
            </div>
          </div>
        </div>

        <div className="finalWave"></div>
      </div>
      <div className="wave sec">
        <h1 className="text-center" id="portfolioTitle">
          PORTFOLIO
        </h1>
        <div className="mt-5 p-5">
          <div className="container d-flex flex-column bg-light p-5 space justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="smBox p-2 col-6">
                <components.Caja img={sf} description="Stanger Films page" />
              </div>
              <div className="smBox p-2 col-6">
                <components.Caja img={sw} description="Star Wars API blog" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="smBox p-2">
                <components.Caja img={post} description="Instagram post" />
              </div>
              <div className="smBox p-2">
                <components.Caja img={insta} description="Instagram feed" />
              </div>
              <div className="smBox p-2">
                <components.Caja
                  img={token}
                  description="Authentication model"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="smBox p-2 col-4">
                <components.Caja img={page} description="React page" />
              </div>
              <div className="smBox p-2 col-4">
                <components.Caja img={card} description="Random card generator" />
              </div>
              <div className="smBox p-2 col-4">
                <components.Caja img={toDo} description="To Do list" />
              </div>
            </div>
          </div>
        </div>
        <div class="endWave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <div className="contact sec" id="contact">
        
          <h2 className="borderi"> CONTACT ME</h2>
          <h2 className="wavy"> CONTACT ME</h2>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

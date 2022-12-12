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
//projects img
import sf from './images/swPage.png'
import sw from './images/sw.png'
import eddie from './images/eddie.png'
import token from './images/token.png'
import todo from './images/toDoList.PNG'
import card from './images/card.PNG'
import feed from './images/feed.PNG'
import post from './images/post.PNG'
import sP from './images/simplePage.PNG'

//COMPONENTES
import * as components from "./components";

function App() {
  return (
    <div className="App">
      <div>
        <components.Welcome />
      </div>

      <div className="fill pt-4">
        <components.NavBar />
        <div className="bodyPart">
          <div>
            <h1 className="about text-center m-5" id="explore">
              ABOUT ME
            </h1>
            <div className="container p-2 rounded" id="bgMain">
              <div className="p-5" id="bgAboutMe">
                <div className="hobbies">
                  <div className="mt-2 hobb">
                    <components.Hobbie
                      nameIcon={<i className="fa-solid fa-plane fa-xl m-3"></i>}
                      text={"coding"}
                    />
                  </div>
                  <div className="mt-2 hobb">
                    <components.Hobbie
                      nameIcon={<i className="fa-solid fa-tree fa-xl m-3"></i>}
                      text={"nature"}
                    />
                  </div>
                  <div className="mt-2 hobb">
                    <components.Hobbie
                      nameIcon={
                        <i className="fa-solid fa-graduation-cap fa-xl m-3"></i>
                      }
                      text={"books"}
                    />
                  </div>
                  <div className="mt-2 hobb">
                    <components.Hobbie
                      nameIcon={
                        <i className="fa-solid fa-paintbrush fa-xl m-3"></i>
                      }
                      text={"drawing"}
                    />
                  </div>
                </div>
                <span className="aboutMeSec">
                  <img src={avatar} alt="avatar" />

                  <a href={resume} className="btn mt-2" id="cv">
                    <span className="d-flex justify-content-center">
                      <span className="me-2">
                        <i className="fa-solid fa-file fa-lg"></i>
                      </span>
                      <h6>RESUME (CV)</h6>
                      <br />
                    </span>
                  </a>
                </span>

                <div className="d-flex aboutSec">
                  <div className="aboutTexto">
                    <h1 className="text-center my-5" id="hello">
                      Hello World!
                    </h1>
                    <div>
                      <p>
                        I'm Laura Marín, a
                        <span className="FullStk"> Full Stack developer </span>
                        highly passionate and a hard worker.
                        <br />
                        High attention to detail, well-organized, naturally
                        curious, interested about technology and working on
                        awesome projects with awesome people.
                        <br />
                        <br />
                        <span className="FullStk">Let's make it real!</span>
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
        </div>
        <div className="wave sec">
          <div className="firstWave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="cardsBody">
            <h1 className="text-center" id="portfolioTitle">
              PORTFOLIO
            </h1>
            <h3 id="subPortfolio">MY WORK</h3>
            <div className="space">
              <div className="card1">
                <components.Card
                project="Strager Films" 
                ima={sf}
                buttonTitle="take a look"
                refe='https://github.com/LulMg/Stranger-films.git'
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Star Wars API page" 
                ima={sw}
                buttonTitle="take a look"
                refe='https://github.com/LulMg/starWars-flux.git'
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Authentication" 
                buttonTitle="take a look"
                ima={token}
                refe='https://github.com/LulMg/token.git'
                />
              </div>
            </div>
            <div className="space2">
              <div className="card1">
                <components.Card 
                project="To Do List" 
                buttonTitle="take a look"
                ima={todo}
                refe='https://github.com/LulMg/TodoList-react.git'
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Eddie Home-page" 
                buttonTitle="take a look"
                ima={eddie}
                refe='https://challenge-edie-home-page.vercel.app/'
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Card generator" 
                buttonTitle="take a look"
                ima={card}
                refe="https://github.com/LulMg/card-generator.git"
                />
              </div>
            </div>
            <div className="space3">
              <div className="card1">
                <components.Card 
                project="Instagram feed" 
                buttonTitle="take a look"
                ima={feed}
                refe="https://github.com/LulMg/Instagram-feed.git"
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Instagram post" 
                buttonTitle="take a look"
                ima={post}
                refe="https://github.com/LulMg/instagram-post.git"
                />
              </div>
              <div className="card1">
                <components.Card 
                project="Simple react page" 
                buttonTitle="take a look"
                ima={sP}
                refe="https://github.com/LulMg/Page-w-React.git"
                />
              </div>
            </div>
          </div>
          <div className="endWave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="contacto">
          <div className="contact sec" id="contact">
            <h2 className="borderi"> CONTACT ME</h2>
            <h2 className="wavy"> CONTACT ME</h2>
          </div>
          <div className="d-flex justify-content-center access">
            <div className="footerbutton">
              <a href="https://github.com/LulMg">
                <components.BotonPurp
                  title={<i className="fa-brands fa-github-alt fa-2x px-1"></i>}
                />
              </a>
            </div>
            <div className="footerbutton">
              <a href="https://www.linkedin.com/in/lauramarinlulm/">
                <components.BotonW
                  title={<i className="fa-brands fa-linkedin fa-2x px-1"></i>}
                />
              </a>
            </div>
            <div className="text-center mail footerbutton">
              <a href="mailto:lulumarin.25.lm@gmail.com">
                <components.BotonW
                  title={<i className="fa-solid fa-envelope fa-2x px-1"></i>}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center freeVec">
        <p>
          <a href="https://www.freepik.com/free-vector/bedouins-walk-egypt-pyramids-camel-night-desert_12332070.htm">
            Pyramids by upklyak
          </a>{" "}
          on Freepik
        </p>
      </div>
    </div>
  );
}

export default App;

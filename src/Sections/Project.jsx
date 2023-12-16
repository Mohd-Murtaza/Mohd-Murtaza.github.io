import React from "react";
import "../Styles/Project.css";
import expediaProjectVideo from "../assets/ExpediaProject.mp4";
import weatherProjectVideo from "../assets/WeatherProject.mp4";

const Project = () => {
  return (
    <section id="projects">
      <div className="projectMainContainer">
        <h1 className="projectHeading">Projects</h1>
        <div className="projectsDiv">
          <div className="projectCard">
            <h3 className="projectNameText">Expedia Clone</h3>
            <div className="projectVideoDiv">
              <video className="projectVideo" autoPlay loop muted>
                <source src={expediaProjectVideo} type="video/mp4" />
              </video>
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  The Expedia website can be used to book airline tickets, hotel
                  reservations, car rentals, cruise ships, and vacation
                  packages.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://melodious-sundae-7dc4a5.netlify.app/"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Mohd-Murtaza/Expedia-Project"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  React <br /> CSS <br /> Java Script <br /> Json{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">Weather App</h3>
            <div className="projectVideoDiv">
              <video className="projectVideo" autoPlay loop muted>
                <source src={weatherProjectVideo} type="video/mp4" />
              </video>
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                 This is the Weather app where you can check the current weather details across the world. You can check the 7-day forecast as well as. 
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://stupendous-sprite-3c2c9f.netlify.app/"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Mohd-Murtaza/Fetch-2/tree/main/weatherReport2"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  HTML <br/> CSS <br /> Java Script
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

import React from "react";
import "../Styles/Skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import dom from "../assets/dom.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import mui from "../assets/material-ui.svg";
import chakraUi from "../assets/chakra-ui.svg";
import json from "../assets/json.svg";
import postman from "../assets/postman.svg";
import git from "../assets/git.svg";
import bash from "../assets/bash.svg";
import vsCode from "../assets/vs-code.svg";
import nodeJs from "../assets/node-js.svg";
import npm from "../assets/npm.svg";
import vite from "../assets/vite.svg";
import FadeInSection from "../Utills/FadeInSection";

const Skills = () => {
  const techs = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JS" },
    { img: dom, name: "DOM" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: mui, name: "Material UI" },
    { img: chakraUi, name: "Chakra UI" },
    { img: json, name: "Json" },
    { img: vite, name: "Vite" },
  ];
  const tools=[
    { img: postman, name: "Postman" },
    { img: git, name: "Git" },
    { img: bash, name: "Bash" },
    { img: vsCode, name: "VS Code" },
    { img: nodeJs, name: "Node JS" },
    { img: npm, name: "NPM" },
  ]
  return (
    <section id="skills">
      <div className="skillsMainContainer">
        <h1 className="skillsHeading">Tech-Stack</h1>
        <div className="skillsCardsMainDiv">
          {techs.map((ele, ind) => (
            <FadeInSection key={ind}>
              <div className="skillsCard" key={ind}>
                <div className="skillsImgDiv">
                  <img className="skillsImg" src={ele.img} alt="" />
                </div>
                <h3 className="skillsText">{ele.name}</h3>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      <div className="skillsMainContainer">
        <h1 className="skillsHeading">Tech-Tools</h1>
        <div className="skillsCardsMainDiv">
          {tools.map((ele, ind) => (
            <FadeInSection key={ind}>
              <div className="skillsCard" key={ind}>
                <div className="skillsImgDiv">
                  <img className="skillsImg" src={ele.img} alt="" />
                </div>
                <h3 className="skillsText">{ele.name}</h3>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

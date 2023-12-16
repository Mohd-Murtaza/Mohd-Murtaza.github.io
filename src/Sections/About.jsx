import React from "react";
import "../Styles/About.css";
import about from "../assets/about3.png";
const About = () => {
  return (
    <section id="about">
      <div className="aboutMainContainer">
        <hr className="aboutHr" />
        <div className="aboutContainer">
          <div className="whoImContainer">
            <h1 className="whoImText">Who I am</h1>
            <p className="whoImDetailText">
              My name's Mohd Murtaza. I'm a full stack web developer based in
              Delhi, India.
              <br />
              <br />I am a Arts Student but I love exploring new technologies in
              the field of Web Development and always try to adapt to them. I
              believe in the concept of continuous learning by regularly
              upgrading my skills and enhancing my knowledge. I have learnt MERN
              stack, data structures, algorithms, and soft skills at Masai
              School. And besides coding, I love traveling, and listeninng lofi
              music. As a developer, my hunger for learning has drastically
              increased. And I want to centralize my skills and learning for
              enhancement of an organization and more of it, to enhance my
              career.
            </p>
          </div>
          <div className="aboutVectorDiv">
            <img className="aboutVector" src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

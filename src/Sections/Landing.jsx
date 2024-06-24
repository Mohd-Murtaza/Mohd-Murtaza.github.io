import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Landing.css";
import profileImg from "../assets/myProfile.png";
import MurtazaCV from "../assets/MohdMurtaza-FullStackWebDev.pdf";

const Landing = () => {
  const handleLandingButtonClick = () => {
    window.open(MurtazaCV, "_blank");
    const link = document.createElement("a");
    link.href = MurtazaCV;
    link.download = "MohdMurtaza-FullStackWebDev.pdf";
    link.click();
  };
  return (
    <>
      <Navbar />
      <section id="landing">
      <div className="landingMainContainer">
        <img className="profileImg" src={profileImg} alt="" />
        <div className="landingLeftContainer"></div>
        <div className="landingRightContainer">
          <div className="landingDetailsContainer">
            <h3 className="landingH3Details">Full Stack Web Developer</h3>
            <h1 className="landingH1Details">Mohd Murtaza</h1>
            <h3 className="landingH3Details">
              Ability is what you’re capable of doing. Motivation determines
              what you do. Attitude determines how well you do it.
            </h3>
            <div className="landingBtnDiv">
              <button className="landingCV-Btn" onClick={handleLandingButtonClick}>
                Resume
              </button>
              <a href="#contact">
                <button className="landingContact-Btn">Contact</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section> 
    </>
  );
};

export default Landing;

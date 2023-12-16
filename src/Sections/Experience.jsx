import React from "react";
import "../Styles/Experience.css";
import experienceImg from "../assets/experience.png";
import FadeInSection from "../Utills/FadeInSection";
const Experience = () => {
  return (
    <section id="experience">
      <div className="experienceMainContainer">
        <h1 className="experiencceHeading">Experience</h1>
        <div className="experienceContainer">
          <div className="experienceCradsMainDiv">
            <FadeInSection>
              <div className="experienceCompanyDiv">
                <h2 className="experienceH2Text">
                  Company:{" "}
                  <span className="experienceSpanText">
                    Dear Sir "YouTube Channel 16M+ Subscriber"
                  </span>
                </h2>
                <h2 className="experienceH2Text">
                  Designation:{" "}
                  <span className="experienceSpanText">
                    Customer Supports and Back-end Executive
                  </span>
                </h2>
                <h2 className="experienceH2Text">
                  Duration:{" "}
                  <span className="experienceSpanText">
                    2+ Years with Full Efforts
                  </span>
                </h2>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="experienceRoles-Responsibilities">
                <h2 className="experienceH2Text">Roles & Resposibilities</h2>
                <ul style={{ margin: "0%" }}>
                  <li className="experienceLiText">Managing Costomers</li>
                  <li className="experienceLiText">Managing Mails Queries</li>
                  <li className="experienceLiText">
                    Managing Website ans Application
                  </li>
                  <li className="experienceLiText">
                    Sometime Video Shooting and Video Diraction
                  </li>
                  <li className="experienceLiText">
                    Managing Website Back-end Panel
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
          <div className="experienceVectorDiv">
            <img className="experienceVector" src={experienceImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

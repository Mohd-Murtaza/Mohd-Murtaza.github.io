import React, { useEffect } from "react";
import "../Styles/Experience.css";
import experienceImg from "../assets/experience.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    AOS.init({
      offset: 20,
      duration: 500,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  return (
    <section id="experience">
      <div className="experienceMainContainer">
        <h1 className="experienceHeading">Experience</h1>
        <div className="experienceContainer">
          <div className="experienceCardsMainDiv">
            <div data-aos="fade-up">
              <div className="experienceCompanyDiv">
                <h2 className="experienceH2Text">
                  Company:{" "}
                  <span className="experienceSpanText">
                    Badho Technologies Private Limited
                  </span>
                </h2>
                <h2 className="experienceH2Text">
                  Designation:{" "}
                  <span className="experienceSpanText">
                    Full Stack Engineer
                  </span>
                </h2>
                <h2 className="experienceH2Text">
                  Duration:{" "}
                  <span className="experienceSpanText">
                    May 2024 - November 2024
                  </span>
                </h2>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="experienceRoles-Responsibilities">
                <h2 className="experienceH2Text">Roles & Responsibilities</h2>
                <ul style={{ margin: "0%" }}>
                  <li className="experienceLiText">
                    Built the DistributershipDetails page with dynamic modals
                    using Next.js, integrating Hasura and GraphQL for seamless
                    data handling and error management.
                  </li>
                  <li className="experienceLiText">
                    Collaborated on resolving critical Jira tickets, addressing
                    bugs, and implementing feature enhancements for web and
                    mobile applications.
                  </li>
                  <li className="experienceLiText">
                    Contributed to the development and maintenance of React
                    Native mobile applications (Buyer, Seller, and Employee
                    apps), fixing bugs and delivering new features to improve
                    functionality.
                  </li>
                  <li className="experienceLiText">Ensured seamless integration of backend APIs with frontend components while maintaining high code quality and adherence to agile practices.</li>
                  <li className="experienceLiText">Enhanced app functionality by addressing edge cases and ensuring smooth frontend-backend integration.</li>
                </ul>
              </div>
            </div>
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

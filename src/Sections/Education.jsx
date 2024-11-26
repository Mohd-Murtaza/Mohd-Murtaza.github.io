import React,{useEffect} from "react";
import "../Styles/Education.css";
import education from "../assets/education.png";
import masai from "../assets/masai.png";
import CBSE from "../assets/CBSE.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(()=>{
    AOS.init({
      offset: 20,
      duration: 500,
      easing: 'ease-in',
      delay: 100,
    });
  },[])
  return (
    <section id="education">
      <div className="educationMainContainer">
        <h1 className="educationHeading">Education</h1>
        <div className="educationContainer">
          <img className="educationVector" src={education} alt="" />
          <div className="educationCardsMainCont">
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={masai} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">Pursuing</span>
                  <h3 className="educationSchoolText">
                    Full Stack Web Development
                  </h3>
                  <h3 className="educationSchoolText">
                    Masai School, Bangalore
                  </h3>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={CBSE} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">2015-2016</span>
                  <h3 className="educationSchoolText">12th with CBSE Board</h3>
                  <h3 className="educationSchoolText">Delhi, India</h3>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={CBSE} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">2013-2014</span>
                  <h3 className="educationSchoolText">10th with CBSE Board</h3>
                  <h3 className="educationSchoolText">Delhi, India</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

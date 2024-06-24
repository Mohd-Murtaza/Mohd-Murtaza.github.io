import React, { useState } from "react";
import MurtazaCV from "../assets/MohdMurtaza-FullStackWebDev.pdf";
import "../Styles/Navbar.css";
const links = [
  {
    link:"#landing",
    title:"Home"
  },
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#github", 
    title: "Github",
  },
  {
    link: "#education",
    title: "Education",
  },
  {
    link: "#skills",
    title: "Skills",
  },
  {
    link: "#experience",
    title: "Experience",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    document.body.classList.toggle("body-scroll-disabled", !isMenuOpen);
  };
  const handleButtonClick = () => {
    window.open(MurtazaCV, "_blank");
    const link = document.createElement("a");
    link.href = MurtazaCV;
    link.download = "MohdMurtaza-FullStackWebDev.pdf";
    link.click();
  };

  return (
    <>
      <div className="navbarMainDiv">
        <div className="navbarContainer">
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.link}
                      onClick={() => {
                        handleMenuToggle();
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbarTabsContainer">
            {links.map((link, index) => (
              <a key={index} href={link.link}>
                <div>{link.title}</div>
              </a>
            ))}
          </div>
          <div className="navbarResumeBtnDiv">
            <button className="navbarResumeBtn" onClick={handleButtonClick}>
              Resume
            </button>
          </div>
          <div className="nameBestermindFontDiv">
            <h1 className="nameBestermindFont">&lt;Murtaza&#47;&gt;</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

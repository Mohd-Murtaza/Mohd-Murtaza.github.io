import React, { useState } from "react";
import MurtazaCV from "../assets/MurtazaCV.pdf";
import "../Styles/Navbar.css";
const links = [
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
    link.download = "MurtazaCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              {/* <div className='overlay'></div> */}
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
            <a href={MurtazaCV} download="MurtazaCV.pdf" target="_blank">
              <button className="navbarResumeBtn" onClick={handleButtonClick}>
                Resume
              </button>
            </a>
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

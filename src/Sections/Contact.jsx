import React from "react";
import "../Styles/Contact.css";
import workTogether from "../assets/workTogether.svg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactMainContainer">
        <h1 className="contactHeading">Contacts</h1>
        <div className="contactContainer">
          <div className="contactInputContainer">
            <div className="contactInp">
              <label htmlFor="input">Name</label>
              <input className="input" type="text" placeholder="Your Name..." />
            </div>
            <div className="contactInp">
              <label htmlFor="input">Email</label>
              <input
                className="input"
                type="Email"
                placeholder="Your Email..."
              />
            </div>
            <div className="contactInp">
              <label htmlFor="input">Massage</label>
              <textarea
                className="input"
                type="text"
                placeholder="Your Massage..."
              />
            </div>
            <button className="SendBtn">Send</button>
          </div>
          <div className="contactDetailsContainer">
            <div className="contactDetails">
              <a href="mailto:mohd.murtaza0101@gmail.com" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/488920/email.svg"
                    alt="Email"
                  />
                </div>
              </a>
              <div className="ccontactText">mohd.murtaza0101@gmail.com</div>
            </div>
            <div className="contactDetails">
              <a href="tel:7053371127" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/521544/call-receive.svg"
                    alt="Call"
                  />
                </div>
              </a>
              <div className="ccontactText">7053371127</div>
            </div>
            <div className="contactDetails">
              <a>
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/532539/location-pin.svg"
                    alt="Location"
                  />
                </div>
              </a>
              <div className="ccontactText">North East Delhi, India-110053</div>
            </div>
            <div className="contactDetails">
              <a href="https://github.com/Mohd-Murtaza" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/453763/github.svg"
                    alt="Github"
                  />
                </div>
              </a>
              <div className="ccontactText">Github</div>
            </div>
            <div className="contactDetails">
              <a
                href="https://www.linkedin.com/in/mohd-murtaza-20a86027a/"
                target="blank"
              >
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/447416/linkedin.svg"
                    alt="Linkedin"
                  />
                </div>
              </a>
              <div className="ccontactText">LinkedIn</div>
            </div>
          </div>
          <div className="contactImgContainer">
            <h1 className="contactUsHeading">Let's work together</h1>
            <img
              className="contactUsImg"
              src="https://routemobile.com/wp-content/uploads/2021/07/partneship-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

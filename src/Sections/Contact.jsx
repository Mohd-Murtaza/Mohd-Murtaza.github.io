import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import workTogether from "../assets/workTogether.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID,process.env.REACT_APP_EMAILJS_USER_ID,"134 console")
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="contactMainContainer">
        <h1 className="contactHeading">Contacts</h1>
        <div className="contactContainer">
          <div className="contactInputContainer">
            <form id="mailForm" onSubmit={handleSubmit}>
              <div className="contactInp">
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactInp">
                <label htmlFor="email">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactInp">
                <label htmlFor="message">Message</label>
                <textarea
                  className="input"
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="SendBtn" type="submit" disabled={loading}>
                {loading ? (
                  <div className="spinner"></div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
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
              <div className="contactText">mohd.murtaza0101@gmail.com</div>
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
              <div className="contactText">7053371127</div>
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
              <div className="contactText">North East Delhi, India-110053</div>
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
              <div className="contactText">Github</div>
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
              <div className="contactText">LinkedIn</div>
            </div>
          </div>
          <div className="contactImgContainer">
            <h1 className="contactUsHeading">Let's work together</h1>
            <img
              className="contactUsImg"
              src={workTogether}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

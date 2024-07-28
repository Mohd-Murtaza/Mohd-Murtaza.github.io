// import React from "react";
// import "../Styles/Contact.css";
// import workTogether from "../assets/workTogether.svg";

// const Contact = () => {
//   return (
//     <section id="contact">
//       <div className="contactMainContainer">
//         <h1 className="contactHeading">Contacts</h1>
//         <div className="contactContainer">
//           <div className="contactInputContainer">
//             <div className="contactInp">
//               <label htmlFor="input">Name</label>
//               <input className="input" type="text" placeholder="Your Name..." />
//             </div>
//             <div className="contactInp">
//               <label htmlFor="input">Email</label>
//               <input
//                 className="input"
//                 type="Email"
//                 placeholder="Your Email..."
//               />
//             </div>
//             <div className="contactInp">
//               <label htmlFor="input">Message</label>
//               <textarea
//                 className="input"
//                 type="text"
//                 placeholder="Your Message..."
//               />
//             </div>
//             <button className="SendBtn">Send</button>
//           </div>
//           <div className="contactDetailsContainer">
//             <div className="contactDetails">
//               <a href="mailto:mohd.murtaza0101@gmail.com" target="blank">
//                 <div className="contactImgDiv">
//                   <img
//                     className="contactImg"
//                     src="https://www.svgrepo.com/show/488920/email.svg"
//                     alt="Email"
//                   />
//                 </div>
//               </a>
//               <div className="ccontactText">mohd.murtaza0101@gmail.com</div>
//             </div>
//             <div className="contactDetails">
//               <a href="tel:7053371127" target="blank">
//                 <div className="contactImgDiv">
//                   <img
//                     className="contactImg"
//                     src="https://www.svgrepo.com/show/521544/call-receive.svg"
//                     alt="Call"
//                   />
//                 </div>
//               </a>
//               <div className="ccontactText">7053371127</div>
//             </div>
//             <div className="contactDetails">
//               <a>
//                 <div className="contactImgDiv">
//                   <img
//                     className="contactImg"
//                     src="https://www.svgrepo.com/show/532539/location-pin.svg"
//                     alt="Location"
//                   />
//                 </div>
//               </a>
//               <div className="ccontactText">North East Delhi, India-110053</div>
//             </div>
//             <div className="contactDetails">
//               <a href="https://github.com/Mohd-Murtaza" target="blank">
//                 <div className="contactImgDiv">
//                   <img
//                     className="contactImg"
//                     src="https://www.svgrepo.com/show/453763/github.svg"
//                     alt="Github"
//                   />
//                 </div>
//               </a>
//               <div className="ccontactText">Github</div>
//             </div>
//             <div className="contactDetails">
//               <a
//                 href="https://www.linkedin.com/in/mohd-murtaza-20a86027a/"
//                 target="blank"
//               >
//                 <div className="contactImgDiv">
//                   <img
//                     className="contactImg"
//                     src="https://www.svgrepo.com/show/447416/linkedin.svg"
//                     alt="Linkedin"
//                   />
//                 </div>
//               </a>
//               <div className="ccontactText">LinkedIn</div>
//             </div>
//           </div>
//           <div className="contactImgContainer">
//             <h1 className="contactUsHeading">Let's work together</h1>
//             <img
//               className="contactUsImg"
//               src="https://routemobile.com/wp-content/uploads/2021/07/partneship-banner.svg"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Contact;

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData, "form data")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "on line no. 133 form data")
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID,process.env.REACT_APP_EMAILJS_USER_ID,"134 console")
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
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
              <button className="SendBtn" type="submit">
                Send
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

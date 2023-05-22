import { TextField } from "@mui/material";
import "./contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const styles = {
    fontFamily: "Taviraj, serif",
    width: "80%",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <button className="titleButton">Get in touch</button>
      <div className="contactContainer">
        {/* contact form */}
        <form ref={form} onSubmit={sendEmail} className="contactFormContainer">
          <div className="contactFormWrapper">
            <TextField
              className="contactTextField"
              label="NAME"
              variant="outlined"
              style={styles}
              name="user_name"
              required
            />
            <TextField
              style={styles}
              className="contactTextField"
              label="CONTACT NUMBER"
              variant="outlined"
              name="number"
              required
            />
            <TextField
              style={styles}
              className="contactTextField"
              label="Email"
              variant="outlined"
              name="email"
              required
            />
            <TextField
              style={styles}
              id="filled-multiline-static"
              className="contactTextField"
              label="QUERIES"
              rows={4}
              multiline
              required
              name="message"
              variant="outlined"
            />
            <button type="sumbit" className="contactSubmitButton">
              Submit
            </button>
          </div>
        </form>
        {/* contact info */}
        <div className="contactInfoContainer">
          <div className="contactInfo">
            <span className="contactInfoTitle">Contact: </span>
            <div className="contactInfoMainWrapper">
              <div className="contactInfoWrapper">
                <img
                  src="assets/contact/email.png"
                  alt=""
                  className="contactInfoImage"
                />
                <span className="contactInfoEmail">devign2022@gmail.com</span>
              </div>

              <div className="contactInfoWrapper">
                <img
                  src="assets/contact/call.png"
                  alt=""
                  className="contactInfoImage"
                />
                <div className="contactInfoPhoneNums">
                  <a
                    href="tel: +91 88677 81991"
                    className="contactInfoPhoneNum"
                  >
                    +91 88677 81991
                  </a>
                  <a
                    href="tel: +91 79752 64624"
                    className="contactInfoPhoneNum"
                  >
                    +91 79752 64624
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

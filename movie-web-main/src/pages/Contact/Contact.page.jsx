import React from "react";
import "./Contact.css";
export default function ContactPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="text-4xl">Contact Us</h2>
        </div>
      </div>
      <div className="container mx-auto">
        <span className="big-circle" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <p>Đường số 10 cityland phan văn trị</p>
              </div>
              <div className="information">
                <p>cybersoft@edu.com</p>
              </div>
              <div className="information">
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" defaultValue={""} />
                <label htmlFor>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

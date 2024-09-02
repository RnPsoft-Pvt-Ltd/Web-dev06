import "./ContactUs.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactUs() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6qdb7ra', 'template_n7g954n', form.current, {
        publicKey: '5ZKs9U4ECXgbsDJiu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
  return (
    <>
      <div className="page-container">
        <div className="header">
          <h1>Contact Us</h1>
          <p className="intro-text">Got a question? Want to give feedback? We're just a message away.</p>
        </div>
        <div className="container">
          <div className="left-section">
            <h2>We'd love to hear from you!</h2>
            <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
            <form  ref={form} onSubmit={sendEmail}>
              <div className="form-group">
              <input type="text" id="first-name" name="user_firstName" placeholder="First Name" required />
              <input type="text" id="last-name" name="user_lastName" placeholder="Last Name" required />
              </div>
              <input type="email" id="email" name="user_email" placeholder="Email" required />
              <textarea id="message" name="message" placeholder="Message" required></textarea>
              <button type="submit">Send it <i className="fas fa-rocket rocket"></i></button>
            </form>
            <p className="response-time">We aim to respond within 24 hours</p>
          </div>
          <div className="right-section">
            <img src="./chatai.png" alt="Chat AI" />
          </div>
        </div>
      </div>
    </>
  );
}

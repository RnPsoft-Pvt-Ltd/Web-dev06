import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from "./Images/rnpsoftimage.png"
import instaLogo from "./Images/Instagram.png"
import linkedInLogo from "./Images/LinkedIn.png"
import twitterLogo from "./Images/Twitter.png"
import youtubeLogo from "./Images/Youtube.png"
import whatsappLogo from "./Images/Whatsapp.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="RnPsoft Logo" className="footer-logo" />
          <p>A pioneering tech company driven by innovation, excellence, and a passion for creating cutting-edge solutions</p>
          <a href="mailto:team@rnpsoft.com">team@rnpsoft.com</a>
          <p>+91 9798219701</p>
          <p>+91 8637845107</p>
        </div>
        <div className="footer-center">
          <h3>About Us</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/career">Career</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/"><img src={instaLogo} alt="Instagram" /></a>
            <a href="/"><img src={whatsappLogo} alt="WhatsApp" /></a>
            <a href="/"><img src={linkedInLogo} alt="LinkedIn" /></a>
            <a href="/"><img src={twitterLogo} alt="Twitter" /></a>
            <a href="/"><img src={youtubeLogo} alt="YouTube" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 RnPsoft, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

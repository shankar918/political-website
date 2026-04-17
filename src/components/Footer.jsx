import React from "react";
import "../Footer.css";
import logo from "../assets/logo-bjp.jpg"; // Reusing your logo
// import {Instagram,BsFacebook,youtube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Section 1: Brand & About */}
        <div className="footer-section brand-section">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="BJP Logo" className="footer-logo" />
            <h2>jagadeshwaraChary Sugurthi</h2>
          </div>
          <p>
            Dedicated to Progress, Unity, and Development.
            Building a stronger, self-reliant nation together with the power of the people.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/campaigns">Campaigns</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>📍Karimnagar, India</p>
          <p>📞 +91+9440238692</p>
          <p>✉️ Jagan.sugurthi@gmail.com</p>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <p>Stay updated with our latest news and events.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/jagansugurthi" title="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/jagansugurthi?igsh=MTRicDFqN25nZ29ocQ==" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@jagansugurthi" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BJP Political. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
import React from "react";
import "../Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactWhite = () => {
  return (
    <div className="contact-white">

      {/* HERO */}
      <div className="hero-white">
        <button className="connect-btn">🇮🇳 Let's Connect</button>

        <h1>
          Connect With <span>Your Leader</span>
        </h1>

        <p>
          Your voice matters. Share your ideas, issues, and feedback with us.
          Together, we build a better future.
        </p>
      </div>

      {/* CARDS */}
      <div className="contact-cards">

        <div className="card">
          <div className="icon email">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>Jagan.sugurthi@gmail.com</p>
          <span>We respond within 24 hours</span>
        </div>

        <div className="card">
          <div className="icon phone">
            <FaPhoneAlt />
          </div>
          <h3>Phone</h3>
          <p>+91 9440238692</p>
          <span>Mon–sun (24/7)</span>
        </div>

        <div className="card">
          <div className="icon office">
            <FaMapMarkerAlt />
          </div>
          <h3>Office</h3>
          <p>Karimnagar, Telangana</p>
          <span>India</span>
        </div>

        <div className="card">
          <div className="icon hours">
            <FaClock />
          </div>
          <h3>Working Hours</h3>
          <p>Monday – Sunday</p>
          <span>Always Available</span>
        </div>

      </div>
      <form className="contact-form">

  <h2>Send Your Message</h2>

  <div className="form-group">
    <label>Full Name</label>
    <input
      type="text"
      placeholder="Enter your full name"
      required
    />
  </div>

  <div className="form-group">
    <label>Email Address</label>
    <input
      type="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="form-group">
    <label>Subject</label>
    <select>
      <option>Feedback</option>
      <option>Complaint</option>
      <option>Support</option>
      <option>Meeting Request</option>
    </select>
  </div>

  <div className="form-group">
    <label>Your Message</label>
    <textarea
      rows="5"
      placeholder="Write your message here..."
      required
    ></textarea>
  </div>

  <button type="submit" className="submit-btn">
    Submit Message
  </button>

</form>
    </div>
  );
};

export default ContactWhite;
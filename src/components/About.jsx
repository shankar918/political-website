import React from 'react';
import { Link } from 'react-router-dom';
import leftphoto from "../assets/sideimg.jpeg";
import "../About.css"; 

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* 1. Hero & Description Section */}
        <section className="about-hero">
          <div className="hero-image-wrapper">
            <img src={leftphoto} alt="Leader Logo" className="hero-image" />
          </div>
          
          <div className="hero-text">
            <h1>About <span>Our Vision</span></h1>
            <h3>Dedicated to Progress, Unity, and Development</h3>
            <p>
              With a focus on grassroots empowerment, we strive to build a future 
              where every citizen has the opportunity to thrive. Our journey is fueled 
              by integrity, hard work, and an unwavering commitment to public service. 
              Together, we are building a stronger, self-reliant nation.
            </p>
            <p className="desktop-only-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita beatae, 
              labore voluptates nobis, hic doloribus eius maiores ipsa consectetur eligendi ratione.
            </p>
          </div>
        </section>

        {/* 2. Key Achievements / Milestones */}
        <section className="achievements-section">
          <h2>Key Achievements</h2>
          <div className="achievements-grid">
            
            <div className="achievement-card">
              <h3>10+</h3>
              <p>Years of Public Service</p>
            </div>
            
            <div className="achievement-card">
              <h3>500+</h3>
              <p>Infrastructure Development</p>
            </div>
            
            <div className="achievement-card">
              <h3>1M+</h3>
              <p>Citizens Positively Impacted</p>
            </div>
            
          </div>
        </section>

        {/* 3. Call To Action (Contact) */}
        <section className="cta-section">
          <h2>Want to Join Our Mission?</h2>
          <p>
            Be a part of the change. Reach out to us for volunteer opportunities, event information, or to share your valuable ideas.
          </p>
          <Link to="/contact" className="cta-button">
            Get In Touch
          </Link>
        </section>

      </div>
    </div>
  );
}
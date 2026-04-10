import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Award, Map, Building, Briefcase, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";
import "../Hero.css";

// Assets
import img1 from "../assets/banner1.jpeg";
import img2 from "../assets/logo-bjp.jpg"; 
import img3 from "../assets/banner3.jpeg";
import leftphoto from "../assets/sideimg.jpeg";

export default function Hero() {
  const images = [img1, img2, img3];
  const [currentImg, setCurrentImg] = useState(0);

  const milestones = [
    { year: "2015", event: "Started Social Service", description: "Began helping people at village level by solving issues like water, roads, and basic needs.", icon: Users },
    { year: "2018", event: "Youth Leader Recognition", description: "Recognized as an active youth leader supporting employment and development initiatives.", icon: Award },
    { year: "2020", event: "Mandal Level Leadership", description: "Expanded services to mandal level, organizing events and addressing public concerns.", icon: Map },
    { year: "2022", event: "District Level Impact", description: "Worked with district authorities to bring development programs.", icon: Building },
    { year: "2024", event: "Youth Employment Initiative", description: "Launched programs to support youth with jobs and training.", icon: Briefcase },
  ];

  const stats = [
    { label: "Years of Service", value: "10+", icon: <Award size={20} /> },
    { label: "Lives Impacted", value: "50k+", icon: <Users size={20} /> },
    { label: "Projects Done", value: "120+", icon: <Building size={20} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [currentImg]);

  const nextSlide = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="main-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero-container">
        <div className="hero-bg-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="hero-bg-image"
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="hero-badge">Nation First, Always 🇮🇳</span>
            <h1 className="hero-title">
              Building a <span className="text-gradient">Stronger India</span> Together
            </h1>
            <p className="hero-subtitle">
              Dedicated to grassroots development, empowering youth, and ensuring 
              justice for every citizen through transparent leadership.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">Join Movement <ChevronRight size={18} /></button>
              <button className="btn-secondary">View Journey</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-stats-bar"
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-nav">
          <button onClick={prevSlide} className="nav-arrow"><ChevronLeft /></button>
          <div className="hero-dots">
            {images.map((_, i) => (
              <div key={i} className={`dot ${i === currentImg ? "active" : ""}`} onClick={() => setCurrentImg(i)} />
            ))}
          </div>
          <button onClick={nextSlide} className="nav-arrow"><ChevronRight /></button>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero">
          <div className="hero-image-wrapper">
            <img src={leftphoto} alt="Leader" className="hero-image" />
          </div>
          
          <div className="hero-text">
            <h1>About <span>Our Vision</span></h1>
            <h3>Dedicated to Progress, Unity, and Development</h3>
            <p>
              My objective is to serve the upliftment of the underprivileged and weaker sections of society at the village and Mandal levels. Driven by a firm resolve to ensure justice for every individual.
            </p>
            <p className="desktop-only-text">
              I strive for the development of every village and the welfare of every family. My goal is to serve not merely through words, but through concrete actions.
            </p>
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section className="journey-section">
        <div className="journey-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="journey-header"
          >
            <h2 className="journey-title">Leader Journey</h2>
            <div className="journey-underline"></div>
            <p className="journey-desc">Milestones in Public Service & Leadership</p>
          </motion.div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`timeline-item ${isLeft ? "left" : "right"}`}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-card">
                      <div className="card-header">
                        <div className="card-icon">
                          <milestone.icon size={20} />
                        </div>
                        <span className="card-year">{milestone.year}</span>
                      </div>
                      <h3 className="card-event">{milestone.event}</h3>
                      <p className="card-description">{milestone.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
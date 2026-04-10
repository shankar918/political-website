import React, { useState } from "react";
import "../Navbar.css";
import logo from "../assets/logo-bjp.jpg";
import { Link } from "react-router-dom";  

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="navbar-container">
        
        {/* Logo + Title */}
        <div className="logo-section">
          <img src={logo} alt="BJP Logo" className="logo" />
          <h2>
             jagadeshwara Chary Sugurthi </h2>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div 
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Menu Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><Link to="/about">About</Link></li>
          
          <li><a href="/Contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          
          {/* Dropdown Menu */}
          <li className="dropdown">
            <a href="#more" className="dropbtn">More ▾</a>
            
            <ul className="dropdown-menu">
              <li><a href="/publicissues" onClick={() => setMenuOpen(false)}>Public issues</a></li>
              <li><a href="/service" onClick={() => setMenuOpen(false)}>Service</a></li>
              <li><a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
              <li><a href="/eventactivities" onClick={() => setMenuOpen(false)}>Event Activities</a></li>
              <li><a href="/newupdate" onClick={() => setMenuOpen(false)}>News Update</a></li>
              <li><a href="/YouthEmployment" onClick={() => setMenuOpen(false)}>youth employment</a></li>
            </ul>
          </li>
        </ul>

      </div>

    </nav>
  );
}
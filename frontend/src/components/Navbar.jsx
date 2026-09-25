import React, { useState } from 'react';
import logoImg from '../assets/logo.jpeg';
import { restaurantInfo } from '../services/mockData';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logoImg} alt={restaurantInfo.name} />
          <div className="brand-text">
            <h3>{restaurantInfo.name}</h3>
            <p>Authentic Maharashtrian Taste</p>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="navLinks">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={closeMenu}>
              Menu
            </a>
          </li>
          <li>
            <a href="#meal" onClick={closeMenu}>
              Build Your Meal
            </a>
          </li>
          <li>
            <a href="#ai" onClick={closeMenu}>
              AI Recommendation
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import logoImg from '../assets/logo.jpeg';
import { restaurantInfo } from '../services/mockData';

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <img
          src={logoImg}
          className="hero-logo"
          alt={`${restaurantInfo.name} Logo`}
        />

        <h1 className="marathi">{restaurantInfo.nameMarathi}</h1>

        <h2 className="marathi">{restaurantInfo.taglineMarathi}</h2>

        <p>{restaurantInfo.description}</p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-btn">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}

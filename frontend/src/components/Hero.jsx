import React from 'react';
import logoImg from '../assets/logo.jpeg';
import { useRestaurant } from '../context/RestaurantContext';

export default function Hero() {
  const { restaurant } = useRestaurant();

  return (
    <section id="home">
      <div className="hero-content">
        <img
          src={logoImg}
          className="hero-logo"
          alt={`${restaurant.name} Logo`}
        />

        <h1 className="marathi">{restaurant.nameMarathi}</h1>

        <h2 className="marathi">{restaurant.taglineMarathi}</h2>

        <p>{restaurant.description}</p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-btn">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}

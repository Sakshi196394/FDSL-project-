import React from 'react';
import { statisticsData } from '../services/mockData';
import { useRestaurant } from '../context/RestaurantContext';

export default function About() {
  const { restaurant } = useRestaurant();

  return (
    <section id="about">
      <div className="section-title">
        <span>Our Story</span>
        <h2>About {restaurant.name}</h2>
      </div>

      <div className="about-grid">
        <div>
          <div className="about-card">
            <h3>Our Tradition</h3>
            <p>
              {restaurant.name} is built around the love for authentic
              Maharashtrian food and culture.
            </p>
            <p>
              From traditional recipes to carefully selected ingredients, every
              dish is prepared with attention and pride.
            </p>
            <p>
              Our mission is simple — bring the real taste of Maharashtra to
              every guest.
            </p>
          </div>
        </div>

        <div className="story-highlight">
          {statisticsData.map((stat, index) => (
            <div className="story-item" key={index}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { restaurantInfo, statisticsData } from '../services/mockData';

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <span>Our Story</span>
        <h2>About {restaurantInfo.name}</h2>
      </div>

      <div className="about-grid">
        <div>
          <div className="about-card">
            <h3>Our Tradition</h3>
            <p>
              {restaurantInfo.name} is built around the love for authentic
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

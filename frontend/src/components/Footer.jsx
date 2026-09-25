import React from 'react';
import { restaurantInfo } from '../services/mockData';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3>{restaurantInfo.name}</h3>
          <p className="marathi">{restaurantInfo.taglineMarathi}</p>
          <p style={{ marginTop: '8px' }}>
            Authentic Maharashtrian food, prepared with tradition and love.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="#menu">Menu</a>
          <a href="#meal">Build Your Meal</a>
          <a href="#ai">AI Recommendation</a>
          <a href="#gallery">Gallery</a>
          <a href="#video">Restaurant Video</a>
        </div>

        <div>
          <h3>Restaurant</h3>
          <a href="#about">Our Story</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Quick Contact</h3>
          <a href={`tel:${restaurantInfo.phone}`}>📞 Call Us</a>
          <a href="#contact">💬 WhatsApp</a>
          <a href="#contact">📍 Location</a>
        </div>
      </div>

      <div className="copyright">
        © 2026 {restaurantInfo.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

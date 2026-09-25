import React from 'react';
import Feedback from './Feedback';
import { useRestaurant } from '../context/RestaurantContext';

export default function Location() {
  const { restaurant } = useRestaurant();

  return (
    <section id="contact">
      <div className="section-title">
        <span>Visit Us</span>
        <h2>Contact {restaurant.name}</h2>
        <p>We'd love to welcome you and your family.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>📍 Restaurant Information</h3>

          <div className="contact-item">
            📍 {restaurant.address}
          </div>

          <div className="contact-item">
            📞 {restaurant.phone}
          </div>

          <div className="contact-item">
            🕐 {restaurant.hours}
          </div>

          <div className="contact-item">
            ⭐ {restaurant.rating}
          </div>

          <br />

          <a
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            📍 Get Directions
          </a>
        </div>

        <Feedback />
      </div>

      <div className="map-card">
        <iframe
          src={restaurant.mapEmbedUrl}
          loading="lazy"
          title={`${restaurant.name} location map`}
        ></iframe>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          className="secondary-btn"
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </section>
  );
}

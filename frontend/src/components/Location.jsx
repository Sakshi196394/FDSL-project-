import React from 'react';
import { restaurantInfo } from '../services/mockData';
import Feedback from './Feedback';

export default function Location() {
  return (
    <section id="contact">
      <div className="section-title">
        <span>Visit Us</span>
        <h2>Contact {restaurantInfo.name}</h2>
        <p>We'd love to welcome you and your family.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>📍 Restaurant Information</h3>

          <div className="contact-item">
            📍 {restaurantInfo.address}
          </div>

          <div className="contact-item">
            📞 {restaurantInfo.phone}
          </div>

          <div className="contact-item">
            🕐 {restaurantInfo.hours}
          </div>

          <div className="contact-item">
            ⭐ {restaurantInfo.rating}
          </div>

          <br />

          <a
            href={restaurantInfo.googleMapsUrl}
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
          src={restaurantInfo.mapEmbedUrl}
          loading="lazy"
          title={`${restaurantInfo.name} location map`}
        ></iframe>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          className="secondary-btn"
          href={restaurantInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </section>
  );
}

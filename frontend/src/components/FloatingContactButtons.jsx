import React from 'react';
import { restaurantInfo } from '../services/mockData';

export default function FloatingContactButtons() {
  return (
    <div className="floating-contact">
      <a
        href={`tel:${restaurantInfo.phone}`}
        className="float-btn"
        title="Call Hotel Vahinisaheb"
      >
        📞
      </a>

      <a
        href="#contact"
        className="float-btn"
        title="WhatsApp Hotel Vahinisaheb"
      >
        💬
      </a>

      <a
        href="#contact"
        className="float-btn"
        title="Location & Directions"
      >
        📍
      </a>
    </div>
  );
}

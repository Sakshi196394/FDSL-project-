import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';

export default function FloatingContactButtons() {
  const { restaurant } = useRestaurant();

  return (
    <div className="floating-contact">
      <a
        href={`tel:${restaurant.phone}`}
        className="float-btn"
        title={`Call ${restaurant.name}`}
      >
        📞
      </a>

      <a
        href="#contact"
        className="float-btn"
        title={`WhatsApp ${restaurant.name}`}
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

import React from 'react';
import { signatureDishes } from '../services/mockData';

export default function SignatureDishes() {
  return (
    <section id="signature">
      <div className="section-title">
        <span>Chef's Selection</span>
        <h2>Signature Dishes</h2>
        <p>
          Some of our most loved dishes, specially recommended by our kitchen.
        </p>
      </div>

      <div className="signature-grid">
        {signatureDishes.map((dish) => (
          <div className="signature-card" key={dish.id}>
            <div className="dish-icon">{dish.icon}</div>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { galleryItems } from '../services/mockData';

export default function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="gallery">
      <div className="section-title">
        <span>Visual Journey</span>
        <h2>Photo Gallery</h2>
        <p>Explore our food, ambience and Maharashtrian hospitality.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            className="gallery-item"
            key={item.id}
            onClick={() => setActiveItem(item)}
            title={`View ${item.title}`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="modal-overlay" onClick={() => setActiveItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close Preview"
            >
              ✕
            </button>
            <div className="modal-icon">{activeItem.icon}</div>
            <h3>{activeItem.title}</h3>
            <p style={{ color: '#aaa', fontSize: '13px' }}>
              Category: {activeItem.tag}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

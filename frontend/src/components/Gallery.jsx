import React, { useEffect, useState } from 'react';
import { galleryService } from '../services/galleryService';
import { galleryItems as fallbackGalleryItems } from '../services/mockData';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState(fallbackGalleryItems);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    let isMounted = true;

    galleryService.getActiveGalleryImages()
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setGalleryItems(data.map((item) => ({
            ...item,
            tag: item.category || item.tag || 'Gallery'
          })));
        }
      })
      .catch((error) => {
        console.warn('Could not load gallery images from backend; using fallback data:', error.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.title || 'Restaurant gallery'} />
            ) : (
              item.icon
            )}
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
            {activeItem.imageUrl ? (
              <img src={activeItem.imageUrl} alt={activeItem.title || 'Restaurant gallery'} />
            ) : (
              <div className="modal-icon">{activeItem.icon}</div>
            )}
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

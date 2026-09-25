import React from 'react';
import { restaurantInfo } from '../services/mockData';

export default function VideoSection() {
  return (
    <section id="video">
      <div className="section-title">
        <span>Experience Us</span>
        <h2>Inside {restaurantInfo.name}</h2>
        <p>Take a glimpse into our food and ambience.</p>
      </div>

      <div className="video-box">
        <button
          className="play-button"
          onClick={() =>
            alert('Video feature preview. Full video stream can be linked here.')
          }
          aria-label="Play video"
        >
          ▶
        </button>

        <h3 style={{ marginTop: '20px', fontFamily: 'Cinzel, serif', color: 'var(--gold-light)' }}>
          Restaurant Experience
        </h3>

        <p style={{ color: '#aaa', marginTop: '8px' }}>
          Food • Ambience • Tradition
        </p>
      </div>
    </section>
  );
}

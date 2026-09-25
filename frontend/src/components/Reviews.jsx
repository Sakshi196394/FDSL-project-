import React from 'react';
import { customerReviews } from '../services/mockData';

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="section-title">
        <span>Guest Experiences</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="review-grid">
        {customerReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="stars">{'★'.repeat(review.rating)}</div>
            <p>"{review.text}"</p>
            <h4>— {review.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

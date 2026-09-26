import React, { useEffect, useState } from 'react';
import { reviewService } from '../services/reviewService';
import { customerReviews as fallbackReviews } from '../services/mockData';

export default function Reviews() {
  const [customerReviews, setCustomerReviews] = useState(fallbackReviews);

  useEffect(() => {
    let isMounted = true;

    reviewService.getActiveReviews()
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setCustomerReviews(data.map((review) => ({
            id: review.id,
            author: review.customerName || review.author || 'Customer',
            rating: review.rating || 0,
            text: review.reviewText || review.text || ''
          })));
        }
      })
      .catch((error) => {
        console.warn('Could not load reviews from backend; using fallback data:', error.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

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

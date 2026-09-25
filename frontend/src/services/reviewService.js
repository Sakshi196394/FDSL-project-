import { request } from './apiClient';

/**
 * Customer Reviews API Service
 */
export const reviewService = {
  /**
   * Fetch all reviews (active and inactive)
   */
  getAllReviews: () => request('/reviews'),

  /**
   * Fetch active customer reviews for public display
   */
  getActiveReviews: () => request('/reviews/active'),

  /**
   * Fetch single review by ID
   */
  getReviewById: (id) => request(`/reviews/${id}`),

  /**
   * Submit a new customer review
   */
  createReview: (review) =>
    request('/reviews', {
      method: 'POST',
      body: review
    }),

  /**
   * Update an existing review
   */
  updateReview: (id, review) =>
    request(`/reviews/${id}`, {
      method: 'PUT',
      body: review
    }),

  /**
   * Delete a review by ID
   */
  deleteReview: (id) =>
    request(`/reviews/${id}`, {
      method: 'DELETE'
    })
};

export default reviewService;

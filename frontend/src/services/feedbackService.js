import { request } from './apiClient';

/**
 * Customer Feedback API Service
 */
export const feedbackService = {
  /**
   * Submit new customer feedback
   */
  submitFeedback: (feedbackData) =>
    request('/feedback', {
      method: 'POST',
      body: feedbackData
    }),

  /**
   * Fetch all feedback entries
   */
  getAllFeedback: () => request('/feedback'),

  /**
   * Fetch single feedback entry by ID
   */
  getFeedbackById: (id) => request(`/feedback/${id}`),

  /**
   * Fetch feedback filtered by status (NEW, REVIEWED, ARCHIVED)
   */
  getFeedbackByStatus: (status) => request(`/feedback/status/${status}`),

  /**
   * Update feedback processing status
   */
  updateFeedbackStatus: (id, status) =>
    request(`/feedback/${id}/status?status=${encodeURIComponent(status)}`, {
      method: 'PATCH'
    }),

  /**
   * Delete feedback by ID
   */
  deleteFeedback: (id) =>
    request(`/feedback/${id}`, {
      method: 'DELETE'
    })
};

export default feedbackService;

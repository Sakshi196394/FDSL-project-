import React, { useState } from 'react';
import { feedbackService } from '../services/feedbackService';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setError('');

    try {
      await feedbackService.submitFeedback(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (submitError) {
      setError(submitError.message || 'Could not send feedback. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-card">
      <h3>💬 Send Feedback</h3>

      {submitted && (
        <div className="form-alert">
          Thank you for your valuable feedback! ❤️
        </div>
      )}
      {error && <div className="form-alert" role="alert">{error}</div>}

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Your feedback or suggestion..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        ></textarea>

        <button type="submit" className="primary-btn" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Feedback'}
        </button>
      </form>
    </div>
  );
}

package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.Feedback;
import com.hotelvahinisaheb.entity.FeedbackStatus;
import com.hotelvahinisaheb.exception.ResourceNotFoundException;
import com.hotelvahinisaheb.repository.FeedbackRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Transactional(readOnly = true)
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAllByOrderBySubmittedAtDesc();
    }

    @Transactional(readOnly = true)
    public List<Feedback> getFeedbackByStatus(FeedbackStatus status) {
        if (status == null) {
            return feedbackRepository.findAllByOrderBySubmittedAtDesc();
        }
        return feedbackRepository.findByStatus(status);
    }

    @Transactional(readOnly = true)
    public Feedback getFeedbackById(Long id) {
        return feedbackRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback not found with id: " + id));
    }

    public Feedback updateFeedbackStatus(Long id, FeedbackStatus status) {
        Feedback existing = getFeedbackById(id);
        existing.setStatus(status);
        return feedbackRepository.save(existing);
    }

    public void deleteFeedback(Long id) {
        if (!feedbackRepository.existsById(id)) {
            throw new ResourceNotFoundException("Feedback not found with id: " + id);
        }
        feedbackRepository.deleteById(id);
    }
}

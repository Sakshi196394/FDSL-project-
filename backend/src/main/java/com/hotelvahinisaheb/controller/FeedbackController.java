package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.Feedback;
import com.hotelvahinisaheb.entity.FeedbackStatus;
import com.hotelvahinisaheb.service.FeedbackService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@Valid @RequestBody Feedback feedback) {
        Feedback created = feedbackService.createFeedback(feedback);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedback() {
        return ResponseEntity.ok(feedbackService.getAllFeedback());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
        return ResponseEntity.ok(feedbackService.getFeedbackById(id));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Feedback>> getFeedbackByStatus(@PathVariable FeedbackStatus status) {
        return ResponseEntity.ok(feedbackService.getFeedbackByStatus(status));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Feedback> updateFeedbackStatus(
            @PathVariable Long id,
            @RequestParam FeedbackStatus status) {
        Feedback updated = feedbackService.updateFeedbackStatus(id, status);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.noContent().build();
    }
}

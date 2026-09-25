package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.CustomerReview;
import com.hotelvahinisaheb.service.CustomerReviewService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class CustomerReviewController {

    private final CustomerReviewService customerReviewService;

    public CustomerReviewController(CustomerReviewService customerReviewService) {
        this.customerReviewService = customerReviewService;
    }

    @GetMapping
    public ResponseEntity<List<CustomerReview>> getAllReviews() {
        return ResponseEntity.ok(customerReviewService.getAllReviews());
    }

    @GetMapping("/active")
    public ResponseEntity<List<CustomerReview>> getActiveReviews() {
        return ResponseEntity.ok(customerReviewService.getActiveReviews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerReview> getReviewById(@PathVariable Long id) {
        return ResponseEntity.ok(customerReviewService.getReviewById(id));
    }

    @PostMapping
    public ResponseEntity<CustomerReview> createReview(@Valid @RequestBody CustomerReview review) {
        CustomerReview created = customerReviewService.createReview(review);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerReview> updateReview(@PathVariable Long id, @Valid @RequestBody CustomerReview review) {
        CustomerReview updated = customerReviewService.updateReview(id, review);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        customerReviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }
}

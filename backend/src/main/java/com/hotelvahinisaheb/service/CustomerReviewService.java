package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.CustomerReview;
import com.hotelvahinisaheb.exception.ResourceNotFoundException;
import com.hotelvahinisaheb.repository.CustomerReviewRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerReviewService {

    private final CustomerReviewRepository customerReviewRepository;

    public CustomerReviewService(CustomerReviewRepository customerReviewRepository) {
        this.customerReviewRepository = customerReviewRepository;
    }

    @Transactional(readOnly = true)
    public List<CustomerReview> getAllReviews() {
        return customerReviewRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<CustomerReview> getActiveReviews() {
        return customerReviewRepository.findByActiveTrue();
    }

    @Transactional(readOnly = true)
    public CustomerReview getReviewById(Long id) {
        return customerReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer review not found with id: " + id));
    }

    public CustomerReview createReview(CustomerReview review) {
        return customerReviewRepository.save(review);
    }

    public CustomerReview updateReview(Long id, CustomerReview updatedReview) {
        CustomerReview existing = getReviewById(id);

        existing.setCustomerName(updatedReview.getCustomerName());
        existing.setRating(updatedReview.getRating());
        existing.setReviewText(updatedReview.getReviewText());
        if (updatedReview.getActive() != null) {
            existing.setActive(updatedReview.getActive());
        }

        return customerReviewRepository.save(existing);
    }

    public void deactivateReview(Long id) {
        CustomerReview existing = getReviewById(id);
        existing.setActive(false);
        customerReviewRepository.save(existing);
    }

    public void deleteReview(Long id) {
        if (!customerReviewRepository.existsById(id)) {
            throw new ResourceNotFoundException("Customer review not found with id: " + id);
        }
        customerReviewRepository.deleteById(id);
    }
}

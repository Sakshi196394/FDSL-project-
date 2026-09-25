package com.hotelvahinisaheb.repository;

import com.hotelvahinisaheb.entity.Feedback;
import com.hotelvahinisaheb.entity.FeedbackStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findByStatus(FeedbackStatus status);

    List<Feedback> findAllByOrderBySubmittedAtDesc();
}

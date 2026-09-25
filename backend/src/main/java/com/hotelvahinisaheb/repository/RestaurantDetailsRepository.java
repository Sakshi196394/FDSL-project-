package com.hotelvahinisaheb.repository;

import com.hotelvahinisaheb.entity.RestaurantDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantDetailsRepository extends JpaRepository<RestaurantDetails, Long> {
}

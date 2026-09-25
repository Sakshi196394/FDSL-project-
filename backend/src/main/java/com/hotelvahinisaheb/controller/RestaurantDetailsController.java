package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.RestaurantDetails;
import com.hotelvahinisaheb.service.RestaurantDetailsService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantDetailsController {

    private final RestaurantDetailsService restaurantDetailsService;

    public RestaurantDetailsController(RestaurantDetailsService restaurantDetailsService) {
        this.restaurantDetailsService = restaurantDetailsService;
    }

    @GetMapping
    public ResponseEntity<RestaurantDetails> getRestaurantDetails() {
        return ResponseEntity.ok(restaurantDetailsService.getRestaurantDetails());
    }

    @PutMapping
    public ResponseEntity<RestaurantDetails> updateRestaurantDetails(@Valid @RequestBody RestaurantDetails details) {
        RestaurantDetails updated = restaurantDetailsService.saveOrUpdateDetails(details);
        return ResponseEntity.ok(updated);
    }
}

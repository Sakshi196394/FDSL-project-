package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.RestaurantDetails;
import com.hotelvahinisaheb.repository.RestaurantDetailsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RestaurantDetailsService {

    private final RestaurantDetailsRepository restaurantDetailsRepository;

    public RestaurantDetailsService(RestaurantDetailsRepository restaurantDetailsRepository) {
        this.restaurantDetailsRepository = restaurantDetailsRepository;
    }

    @Transactional(readOnly = true)
    public RestaurantDetails getRestaurantDetails() {
        List<RestaurantDetails> list = restaurantDetailsRepository.findAll();
        if (!list.isEmpty()) {
            return list.get(0);
        }

        // Return a default configuration if no record exists yet
        RestaurantDetails defaults = new RestaurantDetails(
                "Hotel Vahinisaheb",
                "हॉटेल वहिनी साहेब",
                "Authentic Maharashtrian Taste",
                "महाराष्ट्रीयन चवीचा खरा आस्वाद",
                "Experience the authentic taste of Maharashtra, prepared with traditional recipes, fresh ingredients and the warmth of Maharashtrian hospitality.",
                "Shikrapur, Pune, Maharashtra",
                "+91 XXXXX XXXXX",
                "+91 XXXXX XXXXX",
                "11:00 AM – 11:00 PM",
                "https://www.google.com/maps/search/?api=1&query=Shikrapur%2CPune%2CMaharashtra",
                "https://www.google.com/maps?q=Shikrapur,Pune,Maharashtra&output=embed",
                "4.8 / 5 Customer Rating"
        );
        return defaults;
    }

    public RestaurantDetails saveOrUpdateDetails(RestaurantDetails updatedDetails) {
        List<RestaurantDetails> list = restaurantDetailsRepository.findAll();
        if (!list.isEmpty()) {
            RestaurantDetails existing = list.get(0);
            existing.setName(updatedDetails.getName());
            existing.setNameMarathi(updatedDetails.getNameMarathi());
            existing.setTagline(updatedDetails.getTagline());
            existing.setTaglineMarathi(updatedDetails.getTaglineMarathi());
            existing.setDescription(updatedDetails.getDescription());
            existing.setAddress(updatedDetails.getAddress());
            existing.setPhone(updatedDetails.getPhone());
            existing.setWhatsappNumber(updatedDetails.getWhatsappNumber());
            existing.setOpeningHours(updatedDetails.getOpeningHours());
            existing.setGoogleMapsUrl(updatedDetails.getGoogleMapsUrl());
            existing.setMapEmbedUrl(updatedDetails.getMapEmbedUrl());
            existing.setGoogleRating(updatedDetails.getGoogleRating());
            return restaurantDetailsRepository.save(existing);
        }

        return restaurantDetailsRepository.save(updatedDetails);
    }
}

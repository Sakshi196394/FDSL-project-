package com.hotelvahinisaheb.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

/**
 * Entity storing editable restaurant information, contact details, and metadata.
 */
@Entity
@Table(name = "restaurant_details")
public class RestaurantDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Restaurant name is required")
    @Column(nullable = false, length = 150)
    private String name;

    @Column(name = "name_marathi", length = 150)
    private String nameMarathi;

    @Column(length = 255)
    private String tagline;

    @Column(name = "tagline_marathi", length = 255)
    private String taglineMarathi;

    @Column(length = 2000)
    private String description;

    @Column(length = 500)
    private String address;

    @Column(length = 50)
    private String phone;

    @Column(name = "whatsapp_number", length = 50)
    private String whatsappNumber;

    @Column(name = "opening_hours", length = 100)
    private String openingHours;

    @Column(name = "google_maps_url", length = 1000)
    private String googleMapsUrl;

    @Column(name = "map_embed_url", length = 1000)
    private String mapEmbedUrl;

    @Column(name = "google_rating", length = 50)
    private String googleRating;

    public RestaurantDetails() {
    }

    public RestaurantDetails(String name, String nameMarathi, String tagline, String taglineMarathi,
                             String description, String address, String phone, String whatsappNumber,
                             String openingHours, String googleMapsUrl, String mapEmbedUrl, String googleRating) {
        this.name = name;
        this.nameMarathi = nameMarathi;
        this.tagline = tagline;
        this.taglineMarathi = taglineMarathi;
        this.description = description;
        this.address = address;
        this.phone = phone;
        this.whatsappNumber = whatsappNumber;
        this.openingHours = openingHours;
        this.googleMapsUrl = googleMapsUrl;
        this.mapEmbedUrl = mapEmbedUrl;
        this.googleRating = googleRating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNameMarathi() {
        return nameMarathi;
    }

    public void setNameMarathi(String nameMarathi) {
        this.nameMarathi = nameMarathi;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getTaglineMarathi() {
        return taglineMarathi;
    }

    public void setTaglineMarathi(String taglineMarathi) {
        this.taglineMarathi = taglineMarathi;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWhatsappNumber() {
        return whatsappNumber;
    }

    public void setWhatsappNumber(String whatsappNumber) {
        this.whatsappNumber = whatsappNumber;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public String getGoogleMapsUrl() {
        return googleMapsUrl;
    }

    public void setGoogleMapsUrl(String googleMapsUrl) {
        this.googleMapsUrl = googleMapsUrl;
    }

    public String getMapEmbedUrl() {
        return mapEmbedUrl;
    }

    public void setMapEmbedUrl(String mapEmbedUrl) {
        this.mapEmbedUrl = mapEmbedUrl;
    }

    public String getGoogleRating() {
        return googleRating;
    }

    public void setGoogleRating(String googleRating) {
        this.googleRating = googleRating;
    }
}

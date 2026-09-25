package com.hotelvahinisaheb.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * Entity representing an image in the restaurant photo gallery.
 */
@Entity
@Table(name = "gallery_images")
public class GalleryImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Image URL is required")
    @Column(name = "image_url", nullable = false, length = 500)
    private String imageUrl;

    @NotNull(message = "Gallery category is required")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private GalleryCategory category;

    @Column(length = 200)
    private String title;

    @Column(length = 50)
    private String icon;

    @Column(name = "is_active")
    private Boolean active = true;

    public GalleryImage() {
    }

    public GalleryImage(String imageUrl, GalleryCategory category, String title, String icon, Boolean active) {
        this.imageUrl = imageUrl;
        this.category = category;
        this.title = title;
        this.icon = icon;
        this.active = active != null ? active : true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public GalleryCategory getCategory() {
        return category;
    }

    public void setCategory(GalleryCategory category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}

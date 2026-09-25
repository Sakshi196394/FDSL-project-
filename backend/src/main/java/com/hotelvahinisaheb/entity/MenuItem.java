package com.hotelvahinisaheb.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

/**
 * Entity representing a food or drink item on the restaurant menu.
 */
@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Item name is required")
    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 1000)
    private String description;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @NotNull(message = "Category is required")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private MenuCategory category;

    @NotNull(message = "Food type (Veg/Non-Veg) is required")
    @Enumerated(EnumType.STRING)
    @Column(name = "food_type", nullable = false, length = 20)
    private FoodType foodType;

    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @Column(length = 50)
    private String icon;

    @Column(length = 50)
    private String badge;

    @Column(name = "is_chef_recommended")
    private Boolean chefRecommended = false;

    @Column(name = "is_best_seller")
    private Boolean bestSeller = false;

    @Column(name = "is_active")
    private Boolean active = true;

    public MenuItem() {
    }

    public MenuItem(String name, String description, BigDecimal price, MenuCategory category,
                    FoodType foodType, String imageUrl, String icon, String badge,
                    Boolean chefRecommended, Boolean bestSeller, Boolean active) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.foodType = foodType;
        this.imageUrl = imageUrl;
        this.icon = icon;
        this.badge = badge;
        this.chefRecommended = chefRecommended != null ? chefRecommended : false;
        this.bestSeller = bestSeller != null ? bestSeller : false;
        this.active = active != null ? active : true;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public MenuCategory getCategory() {
        return category;
    }

    public void setCategory(MenuCategory category) {
        this.category = category;
    }

    public FoodType getFoodType() {
        return foodType;
    }

    public void setFoodType(FoodType foodType) {
        this.foodType = foodType;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public Boolean getChefRecommended() {
        return chefRecommended;
    }

    public void setChefRecommended(Boolean chefRecommended) {
        this.chefRecommended = chefRecommended;
    }

    public Boolean getBestSeller() {
        return bestSeller;
    }

    public void setBestSeller(Boolean bestSeller) {
        this.bestSeller = bestSeller;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}

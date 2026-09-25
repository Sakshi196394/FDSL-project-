package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.FoodType;
import com.hotelvahinisaheb.entity.MenuCategory;
import com.hotelvahinisaheb.entity.MenuItem;
import com.hotelvahinisaheb.exception.ResourceNotFoundException;
import com.hotelvahinisaheb.repository.MenuItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @Transactional(readOnly = true)
    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<MenuItem> getActiveMenuItems() {
        return menuItemRepository.findByActiveTrue();
    }

    @Transactional(readOnly = true)
    public List<MenuItem> getActiveMenuItemsByCategory(MenuCategory category) {
        if (category == null) {
            return menuItemRepository.findByActiveTrue();
        }
        return menuItemRepository.findByCategoryAndActiveTrue(category);
    }

    @Transactional(readOnly = true)
    public List<MenuItem> getActiveMenuItemsByFoodType(FoodType foodType) {
        return menuItemRepository.findByFoodTypeAndActiveTrue(foodType);
    }

    @Transactional(readOnly = true)
    public MenuItem getMenuItemById(Long id) {
        return menuItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("MenuItem not found with id: " + id));
    }

    public MenuItem createMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    public MenuItem updateMenuItem(Long id, MenuItem updatedItem) {
        MenuItem existing = getMenuItemById(id);

        existing.setName(updatedItem.getName());
        existing.setDescription(updatedItem.getDescription());
        existing.setPrice(updatedItem.getPrice());
        existing.setCategory(updatedItem.getCategory());
        existing.setFoodType(updatedItem.getFoodType());
        existing.setImageUrl(updatedItem.getImageUrl());
        existing.setIcon(updatedItem.getIcon());
        existing.setBadge(updatedItem.getBadge());
        existing.setChefRecommended(updatedItem.getChefRecommended());
        existing.setBestSeller(updatedItem.getBestSeller());
        if (updatedItem.getActive() != null) {
            existing.setActive(updatedItem.getActive());
        }

        return menuItemRepository.save(existing);
    }

    public void deactivateMenuItem(Long id) {
        MenuItem existing = getMenuItemById(id);
        existing.setActive(false);
        menuItemRepository.save(existing);
    }

    public void deleteMenuItem(Long id) {
        if (!menuItemRepository.existsById(id)) {
            throw new ResourceNotFoundException("MenuItem not found with id: " + id);
        }
        menuItemRepository.deleteById(id);
    }
}

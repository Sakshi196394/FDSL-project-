package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.FoodType;
import com.hotelvahinisaheb.entity.MenuCategory;
import com.hotelvahinisaheb.entity.MenuItem;
import com.hotelvahinisaheb.service.MenuItemService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuItemController {

    private final MenuItemService menuItemService;

    public MenuItemController(MenuItemService menuItemService) {
        this.menuItemService = menuItemService;
    }

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItems() {
        return ResponseEntity.ok(menuItemService.getAllMenuItems());
    }

    @GetMapping("/active")
    public ResponseEntity<List<MenuItem>> getActiveMenuItems() {
        return ResponseEntity.ok(menuItemService.getActiveMenuItems());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getMenuItemById(@PathVariable Long id) {
        return ResponseEntity.ok(menuItemService.getMenuItemById(id));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<MenuItem>> getMenuItemsByCategory(@PathVariable MenuCategory category) {
        return ResponseEntity.ok(menuItemService.getActiveMenuItemsByCategory(category));
    }

    @GetMapping("/food-type/{foodType}")
    public ResponseEntity<List<MenuItem>> getMenuItemsByFoodType(@PathVariable FoodType foodType) {
        return ResponseEntity.ok(menuItemService.getActiveMenuItemsByFoodType(foodType));
    }

    @PostMapping
    public ResponseEntity<MenuItem> createMenuItem(@Valid @RequestBody MenuItem menuItem) {
        MenuItem created = menuItemService.createMenuItem(menuItem);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @Valid @RequestBody MenuItem menuItem) {
        MenuItem updated = menuItemService.updateMenuItem(id, menuItem);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id) {
        menuItemService.deleteMenuItem(id);
        return ResponseEntity.noContent().build();
    }
}

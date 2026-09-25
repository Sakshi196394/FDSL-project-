package com.hotelvahinisaheb.repository;

import com.hotelvahinisaheb.entity.FoodType;
import com.hotelvahinisaheb.entity.MenuCategory;
import com.hotelvahinisaheb.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    List<MenuItem> findByActiveTrue();

    List<MenuItem> findByCategoryAndActiveTrue(MenuCategory category);

    List<MenuItem> findByFoodTypeAndActiveTrue(FoodType foodType);
}

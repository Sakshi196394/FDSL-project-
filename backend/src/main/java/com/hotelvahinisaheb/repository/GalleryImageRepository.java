package com.hotelvahinisaheb.repository;

import com.hotelvahinisaheb.entity.GalleryCategory;
import com.hotelvahinisaheb.entity.GalleryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GalleryImageRepository extends JpaRepository<GalleryImage, Long> {

    List<GalleryImage> findByActiveTrue();

    List<GalleryImage> findByCategoryAndActiveTrue(GalleryCategory category);
}

package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.GalleryCategory;
import com.hotelvahinisaheb.entity.GalleryImage;
import com.hotelvahinisaheb.service.GalleryImageService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
public class GalleryImageController {

    private final GalleryImageService galleryImageService;

    public GalleryImageController(GalleryImageService galleryImageService) {
        this.galleryImageService = galleryImageService;
    }

    @GetMapping
    public ResponseEntity<List<GalleryImage>> getAllImages() {
        return ResponseEntity.ok(galleryImageService.getAllImages());
    }

    @GetMapping("/active")
    public ResponseEntity<List<GalleryImage>> getActiveImages() {
        return ResponseEntity.ok(galleryImageService.getActiveImages());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GalleryImage> getImageById(@PathVariable Long id) {
        return ResponseEntity.ok(galleryImageService.getImageById(id));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<GalleryImage>> getImagesByCategory(@PathVariable GalleryCategory category) {
        return ResponseEntity.ok(galleryImageService.getActiveImagesByCategory(category));
    }

    @PostMapping
    public ResponseEntity<GalleryImage> createImage(@Valid @RequestBody GalleryImage image) {
        GalleryImage created = galleryImageService.createImage(image);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GalleryImage> updateImage(@PathVariable Long id, @Valid @RequestBody GalleryImage image) {
        GalleryImage updated = galleryImageService.updateImage(id, image);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteImage(@PathVariable Long id) {
        galleryImageService.deleteImage(id);
        return ResponseEntity.noContent().build();
    }
}

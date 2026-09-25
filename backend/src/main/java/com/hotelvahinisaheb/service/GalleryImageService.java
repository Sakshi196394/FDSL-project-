package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.GalleryCategory;
import com.hotelvahinisaheb.entity.GalleryImage;
import com.hotelvahinisaheb.exception.ResourceNotFoundException;
import com.hotelvahinisaheb.repository.GalleryImageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GalleryImageService {

    private final GalleryImageRepository galleryImageRepository;

    public GalleryImageService(GalleryImageRepository galleryImageRepository) {
        this.galleryImageRepository = galleryImageRepository;
    }

    @Transactional(readOnly = true)
    public List<GalleryImage> getAllImages() {
        return galleryImageRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<GalleryImage> getActiveImages() {
        return galleryImageRepository.findByActiveTrue();
    }

    @Transactional(readOnly = true)
    public List<GalleryImage> getActiveImagesByCategory(GalleryCategory category) {
        if (category == null) {
            return galleryImageRepository.findByActiveTrue();
        }
        return galleryImageRepository.findByCategoryAndActiveTrue(category);
    }

    @Transactional(readOnly = true)
    public GalleryImage getImageById(Long id) {
        return galleryImageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Gallery image not found with id: " + id));
    }

    public GalleryImage createImage(GalleryImage image) {
        return galleryImageRepository.save(image);
    }

    public GalleryImage updateImage(Long id, GalleryImage updatedImage) {
        GalleryImage existing = getImageById(id);

        existing.setImageUrl(updatedImage.getImageUrl());
        existing.setCategory(updatedImage.getCategory());
        existing.setTitle(updatedImage.getTitle());
        existing.setIcon(updatedImage.getIcon());
        if (updatedImage.getActive() != null) {
            existing.setActive(updatedImage.getActive());
        }

        return galleryImageRepository.save(existing);
    }

    public void deactivateImage(Long id) {
        GalleryImage existing = getImageById(id);
        existing.setActive(false);
        galleryImageRepository.save(existing);
    }

    public void deleteImage(Long id) {
        if (!galleryImageRepository.existsById(id)) {
            throw new ResourceNotFoundException("Gallery image not found with id: " + id);
        }
        galleryImageRepository.deleteById(id);
    }
}

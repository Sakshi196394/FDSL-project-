import { request } from './apiClient';

/**
 * Gallery Images API Service
 */
export const galleryService = {
  /**
   * Fetch all gallery images
   */
  getAllGalleryImages: () => request('/gallery'),

  /**
   * Fetch active gallery images for public display
   */
  getActiveGalleryImages: () => request('/gallery/active'),

  /**
   * Fetch single gallery image by ID
   */
  getGalleryImageById: (id) => request(`/gallery/${id}`),

  /**
   * Fetch active gallery images filtered by category (FOOD, INTERIOR, AMBIENCE, KITCHEN, OTHER)
   */
  getGalleryImagesByCategory: (category) => request(`/gallery/category/${category}`),

  /**
   * Create a new gallery image entry
   */
  createGalleryImage: (image) =>
    request('/gallery', {
      method: 'POST',
      body: image
    }),

  /**
   * Update an existing gallery image entry
   */
  updateGalleryImage: (id, image) =>
    request(`/gallery/${id}`, {
      method: 'PUT',
      body: image
    }),

  /**
   * Delete a gallery image by ID
   */
  deleteGalleryImage: (id) =>
    request(`/gallery/${id}`, {
      method: 'DELETE'
    })
};

export default galleryService;

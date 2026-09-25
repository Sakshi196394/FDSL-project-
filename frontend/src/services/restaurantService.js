import { request } from './apiClient';

/**
 * Restaurant Details API Service
 */
export const restaurantService = {
  /**
   * Fetch current restaurant details and metadata
   */
  getRestaurantDetails: () => request('/restaurant'),

  /**
   * Update restaurant details
   */
  updateRestaurantDetails: (details) =>
    request('/restaurant', {
      method: 'PUT',
      body: details
    })
};

export default restaurantService;

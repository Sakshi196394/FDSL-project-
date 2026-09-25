import { request } from './apiClient';

/**
 * Menu API Service
 */
export const menuService = {
  /**
   * Fetch all menu items (both active and inactive)
   */
  getAllMenuItems: () => request('/menu'),

  /**
   * Fetch active menu items for public display
   */
  getActiveMenuItems: () => request('/menu/active'),

  /**
   * Fetch single menu item by ID
   */
  getMenuItemById: (id) => request(`/menu/${id}`),

  /**
   * Fetch active menu items by category (e.g. VEG, NON_VEG, BREADS, DRINKS, DESSERT, THALI)
   */
  getMenuItemsByCategory: (category) => request(`/menu/category/${category}`),

  /**
   * Fetch active menu items by food type (VEG or NON_VEG)
   */
  getMenuItemsByFoodType: (foodType) => request(`/menu/food-type/${foodType}`),

  /**
   * Create a new menu item
   */
  createMenuItem: (menuItem) =>
    request('/menu', {
      method: 'POST',
      body: menuItem
    }),

  /**
   * Update an existing menu item
   */
  updateMenuItem: (id, menuItem) =>
    request(`/menu/${id}`, {
      method: 'PUT',
      body: menuItem
    }),

  /**
   * Delete a menu item by ID
   */
  deleteMenuItem: (id) =>
    request(`/menu/${id}`, {
      method: 'DELETE'
    })
};

export default menuService;

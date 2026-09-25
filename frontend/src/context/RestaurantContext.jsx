import React, { createContext, useContext, useState, useEffect } from 'react';
import { restaurantService } from '../services/restaurantService';
import { restaurantInfo as fallbackRestaurantInfo } from '../services/mockData';

const RestaurantContext = createContext({
  restaurant: fallbackRestaurantInfo,
  loading: true,
  error: null,
  refreshRestaurant: () => {}
});

export function RestaurantProvider({ children }) {
  const [restaurant, setRestaurant] = useState(fallbackRestaurantInfo);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurant = async () => {
    try {
      setLoading(true);
      const data = await restaurantService.getRestaurantDetails();
      if (data) {
        setRestaurant({
          ...fallbackRestaurantInfo,
          ...data,
          name: data.name || fallbackRestaurantInfo.name,
          nameMarathi: data.nameMarathi || fallbackRestaurantInfo.nameMarathi,
          taglineMarathi: data.taglineMarathi || fallbackRestaurantInfo.taglineMarathi,
          description: data.description || fallbackRestaurantInfo.description,
          address: data.address || fallbackRestaurantInfo.address,
          phone: data.phone || fallbackRestaurantInfo.phone,
          whatsappNumber: data.whatsappNumber || data.phone || fallbackRestaurantInfo.phone,
          hours: data.openingHours || data.hours || fallbackRestaurantInfo.hours,
          rating: data.googleRating || data.rating || fallbackRestaurantInfo.rating,
          googleMapsUrl: data.googleMapsUrl || fallbackRestaurantInfo.googleMapsUrl,
          mapEmbedUrl: data.mapEmbedUrl || fallbackRestaurantInfo.mapEmbedUrl
        });
        setError(null);
      }
    } catch (err) {
      console.warn('Using default restaurant info (backend unavailable or error):', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        loading,
        error,
        refreshRestaurant: fetchRestaurant
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  return context || { restaurant: fallbackRestaurantInfo, loading: false, error: null };
}

export default RestaurantContext;

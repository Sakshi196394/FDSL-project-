import React, { useState, useEffect, useMemo } from 'react';
import { menuCategories, initialMenuItems } from '../services/mockData';
import { menuService } from '../services/menuService';

export default function MenuPreview() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function fetchMenuItems() {
      try {
        setLoading(true);
        const data = await menuService.getActiveMenuItems();

        if (isMounted && Array.isArray(data) && data.length > 0) {
          setMenuItems(data);
          setError(null);
        } else if (isMounted && Array.isArray(data) && data.length === 0) {
          // If backend returns empty list (database not seeded yet), use fallback
          console.info('Backend returned 0 active menu items; using initial mock fallback.');
        }
      } catch (err) {
        if (isMounted) {
          console.warn('Could not fetch active menu items from backend API; using fallback data:', err.message);
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchMenuItems();

    return () => {
      isMounted = false;
    };
  }, []);

  const normalizeCategory = (cat) => {
    if (!cat) return '';
    return String(cat).toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  const filteredItems = useMemo(() => {
    const activeNorm = normalizeCategory(activeCategory);
    const q = searchQuery.toLowerCase().trim();

    return menuItems.filter((item) => {
      const itemCatNorm = normalizeCategory(item.category);
      const matchesCategory =
        activeCategory === 'all' ||
        activeNorm === 'all' ||
        itemCatNorm === activeNorm ||
        (activeNorm === 'veg' && item.foodType === 'VEG') ||
        (activeNorm === 'nonveg' && item.foodType === 'NON_VEG');

      const matchesSearch =
        !q ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  const getItemBadge = (item) => {
    if (item.badge) return item.badge;
    if (item.bestSeller) return 'BEST SELLER';
    if (item.chefRecommended) return "CHEF'S PICK";
    return null;
  };

  const getItemIcon = (item) => {
    if (item.icon) return item.icon;
    if (item.foodType === 'NON_VEG') return '🍗';
    return '🍛';
  };

  return (
    <section id="menu">
      <div className="section-title">
        <span>Our Menu</span>
        <h2>Discover Our Flavours</h2>
        <p>
          Explore our carefully prepared dishes made using authentic
          Maharashtrian flavours.
        </p>
      </div>

      <div className="menu-search">
        <input
          type="search"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="menu-filters">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <div className="menu-grid" id="menuGrid">
          {filteredItems.map((item) => {
            const badge = getItemBadge(item);
            return (
              <div className="food-card" key={item.id} data-category={item.category}>
                <div className="food-img">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    getItemIcon(item)
                  )}
                </div>
                <div className="food-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="food-bottom">
                    <span className="price">₹{item.price}</span>
                    {badge && <span className="badge">{badge}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-results" style={{ display: 'block' }}>
          No dishes found. Try another search.
        </div>
      )}
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { menuCategories, initialMenuItems } from '../services/mockData';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return initialMenuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
          {filteredItems.map((item) => (
            <div className="food-card" key={item.id} data-category={item.category}>
              <div className="food-img">{item.icon}</div>
              <div className="food-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="food-bottom">
                  <span className="price">₹{item.price}</span>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results" style={{ display: 'block' }}>
          No dishes found. Try another search.
        </div>
      )}
    </section>
  );
}

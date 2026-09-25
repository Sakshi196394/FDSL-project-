import React, { useState } from 'react';

export default function DishRecommendation() {
  const [foodType, setFoodType] = useState('');
  const [spiceLevel, setSpiceLevel] = useState('');
  const [budget, setBudget] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRecommend = () => {
    if (!foodType || !spiceLevel || !budget) {
      setErrorMsg('⚠️ Please answer all three questions first.');
      setRecommendation(null);
      return;
    }

    setErrorMsg('');

    let dish = 'Maharashtrian Thali';

    if (foodType === 'veg' && budget === 'low') {
      dish = 'Bhakri & Pithla';
    } else if (foodType === 'veg' && spiceLevel === 'mild') {
      dish = 'Maharashtrian Veg Thali';
    } else if (foodType === 'nonveg' && spiceLevel === 'spicy') {
      dish = 'Kolhapuri Mutton';
    } else if (foodType === 'nonveg') {
      dish = 'Chicken Masala';
    }

    setRecommendation(dish);
  };

  return (
    <section id="ai">
      <div className="section-title">
        <span>Smart Dining</span>
        <h2>🤖 AI Dish Recommendation</h2>
        <p>
          Tell us what you like and our smart recommendation system will suggest
          dishes for you.
        </p>
      </div>

      <div className="ai-box">
        <div className="ai-icon">🤖</div>
        <h3>Find Your Perfect Dish</h3>

        <div className="ai-options">
          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            aria-label="Food Type"
          >
            <option value="">Veg / Non-Veg</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>

          <select
            value={spiceLevel}
            onChange={(e) => setSpiceLevel(e.target.value)}
            aria-label="Spice Level"
          >
            <option value="">Spice Level</option>
            <option value="mild">Mild</option>
            <option value="spicy">Spicy</option>
          </select>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-label="Budget"
          >
            <option value="">Budget</option>
            <option value="low">Under ₹150</option>
            <option value="medium">₹150 - ₹300</option>
            <option value="high">Above ₹300</option>
          </select>
        </div>

        <button className="primary-btn" onClick={handleRecommend}>
          ✨ Recommend My Dish
        </button>

        {errorMsg && (
          <div className="recommendation-result" style={{ color: '#ff9883' }}>
            {errorMsg}
          </div>
        )}

        {recommendation && (
          <div className="recommendation-result">
            ✨ Our recommendation for you is <strong>{recommendation}</strong>!
          </div>
        )}
      </div>
    </section>
  );
}

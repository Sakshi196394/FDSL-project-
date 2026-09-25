import React, { useState, useMemo } from 'react';
import { mealBuilderOptions } from '../services/mockData';

export default function BuildYourMeal() {
  const [selectedMain, setSelectedMain] = useState('');
  const [selectedBread, setSelectedBread] = useState('');
  const [selectedRice, setSelectedRice] = useState('');
  const [selectedDrink, setSelectedDrink] = useState('');
  const [selectedDessert, setSelectedDessert] = useState('');

  // Find selected objects
  const mainObj = mealBuilderOptions.mainCourse.find((m) => m.name === selectedMain);
  const breadObj = mealBuilderOptions.bread.find((b) => b.name === selectedBread);
  const riceObj = mealBuilderOptions.rice.find((r) => r.name === selectedRice);
  const drinkObj = mealBuilderOptions.drink.find((d) => d.name === selectedDrink);
  const dessertObj = mealBuilderOptions.dessert.find((d) => d.name === selectedDessert);

  const { totalPrice, totalCalories } = useMemo(() => {
    const price =
      (mainObj?.price || 0) +
      (breadObj?.price || 0) +
      (riceObj?.price || 0) +
      (drinkObj?.price || 0) +
      (dessertObj?.price || 0);

    const calories =
      (mainObj?.calories || 0) +
      (breadObj?.calories || 0) +
      (riceObj?.calories || 0) +
      (drinkObj?.calories || 0) +
      (dessertObj?.calories || 0);

    return { totalPrice: price, totalCalories: calories };
  }, [mainObj, breadObj, riceObj, drinkObj, dessertObj]);

  const hasSelections = Boolean(
    selectedMain || selectedBread || selectedRice || selectedDrink || selectedDessert
  );

  return (
    <section id="meal">
      <div className="section-title">
        <span>Interactive Experience</span>
        <h2>Build Your Meal</h2>
        <p>
          Create your perfect Maharashtrian meal. Select your favourite items
          and see the total instantly.
        </p>
      </div>

      <div className="meal-box">
        <div className="meal-options">
          {/* Main Course */}
          <div className="meal-group">
            <label htmlFor="mainCourse">Main Course</label>
            <select
              id="mainCourse"
              value={selectedMain}
              onChange={(e) => setSelectedMain(e.target.value)}
            >
              <option value="">Select Main Course</option>
              {mealBuilderOptions.mainCourse.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - ₹{item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Bread */}
          <div className="meal-group">
            <label htmlFor="bread">Bread</label>
            <select
              id="bread"
              value={selectedBread}
              onChange={(e) => setSelectedBread(e.target.value)}
            >
              <option value="">Select Bread</option>
              {mealBuilderOptions.bread.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - ₹{item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Rice */}
          <div className="meal-group">
            <label htmlFor="rice">Rice</label>
            <select
              id="rice"
              value={selectedRice}
              onChange={(e) => setSelectedRice(e.target.value)}
            >
              <option value="">Select Rice</option>
              {mealBuilderOptions.rice.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - ₹{item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Drink */}
          <div className="meal-group">
            <label htmlFor="drink">Drink</label>
            <select
              id="drink"
              value={selectedDrink}
              onChange={(e) => setSelectedDrink(e.target.value)}
            >
              <option value="">Select Drink</option>
              {mealBuilderOptions.drink.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - ₹{item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Dessert */}
          <div className="meal-group">
            <label htmlFor="dessert">Dessert</label>
            <select
              id="dessert"
              value={selectedDessert}
              onChange={(e) => setSelectedDessert(e.target.value)}
            >
              <option value="">Select Dessert</option>
              {mealBuilderOptions.dessert.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - ₹{item.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="meal-result">
          <h3>Your Meal Summary</h3>
          <p>
            {hasSelections
              ? 'Your personalised Maharashtrian meal is ready!'
              : 'Select items to build your meal.'}
          </p>

          {hasSelections && (
            <div style={{ marginTop: '8px', color: '#c89b3c', fontSize: '14px' }}>
              Selected:{' '}
              {[selectedMain, selectedBread, selectedRice, selectedDrink, selectedDessert]
                .filter(Boolean)
                .join(' + ')}
              {totalCalories > 0 && ` (~${totalCalories} kcal)`}
            </div>
          )}

          <div className="meal-total">
            Total: ₹<span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <button
      className="theme-btn"
      onClick={() => setIsLightMode(!isLightMode)}
      title="Toggle Dark / Light Mode"
      aria-label="Toggle theme"
    >
      🌓
    </button>
  );
}

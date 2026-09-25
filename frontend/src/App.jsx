import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import ThemeToggle from './components/ThemeToggle';
import { RestaurantProvider } from './context/RestaurantContext';

export default function App() {
  return (
    <RestaurantProvider>
      <div className="app-container">
        <Navbar />
        <HomePage />
        <Footer />
        <FloatingContactButtons />
        <ThemeToggle />
      </div>
    </RestaurantProvider>
  );
}

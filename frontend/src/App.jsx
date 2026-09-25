import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HomePage />
      <Footer />
      <FloatingContactButtons />
      <ThemeToggle />
    </div>
  );
}

import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import MenuPreview from '../components/MenuPreview';
import BuildYourMeal from '../components/BuildYourMeal';
import DishRecommendation from '../components/DishRecommendation';
import SignatureDishes from '../components/SignatureDishes';
import About from '../components/About';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import Reviews from '../components/Reviews';
import Statistics from '../components/Statistics';
import Location from '../components/Location';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <MenuPreview />
      <BuildYourMeal />
      <DishRecommendation />
      <SignatureDishes />
      <About />
      <Gallery />
      <VideoSection />
      <Reviews />
      <Statistics />
      <Location />
    </main>
  );
}

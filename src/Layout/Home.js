import React from 'react';
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Counter from "./components/Counter";
import Features from "./components/Features"
import Shipping from './components/shipping';
function Home() {
  return (
    <div className="Portal">
      <Carousel/>
      <Categories/>
      <Features/>
      <Counter/>
      <Shipping/>
    </div>
  );
}

export default Home;
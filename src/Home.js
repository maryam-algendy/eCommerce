import React from 'react';
import Carousel from "./Layout/components/Carousel";
import Categories from "./Layout/components/Categories";
import Counter from "./Layout/components/Counter";
import Features from "./Layout/components/Features"
import Shipping from './Layout/components/shipping';
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
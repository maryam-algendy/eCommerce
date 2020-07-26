import React from 'react';
import Navbar from "./Layout/components/Navbar";
import Carousel from "./Layout/components/Carousel";
import Categories from "./Layout/components/Categories";
import Counter from "./Layout/components/Counter";
import Features from "./Layout/components/Features"
import Shipping from './Layout/components/shipping';

function Portal() {
  return (
    <div className="Portal">
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Counter/>
      <Features/>
      <Shipping/>
    </div>
  );
}

export default Portal;

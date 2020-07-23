import React from 'react';
import Navbar from "./Layout/components/Navbar";
import Carousel from "./Layout/components/Carousel";
import Categories from "./Layout/components/Categories";
import Counter from "./Layout/components/Counter";

function Portal() {
  return (
    <div className="Portal">
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Counter/>
    </div>
  );
}

export default Portal;

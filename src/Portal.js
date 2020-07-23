import React from 'react';
import Navbar from "./Layout/components/Navbar";
import Carousel from "./Layout/components/Carousel";
import Categories from "./Layout/components/Categories";

function Portal() {
  return (
    <div className="Portal">
      <Navbar/>
      <Carousel/>
      <Categories/>
    </div>
  );
}

export default Portal;

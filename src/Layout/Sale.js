import React from 'react';
import Header from './components/Header';
import SaleContent from './components/SaleContent';

function Sale() {
    return (
      <div>
        <Header img={"/sale.jpg"} name={"women"} desc={"New Arrivals Women Collection 2018"}/>
        <SaleContent/>
      </div>
    );
  }
  
  export default Sale;
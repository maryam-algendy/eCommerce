import React from 'react';
import Header from './Layout/components/Header';
import SaleContent from './Layout/components/SaleContent';

function Sale() {
    return (
      <div>
        <Header img={"/sale.jpg"} name={"women"} desc={"New Arrivals Women Collection 2018"}/>
        <SaleContent/>
      </div>
    );
  }
  
  export default Sale;
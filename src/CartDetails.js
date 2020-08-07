import React from 'react';
import Header from './Layout/components/Header';
import CartTotal from './Layout/components/CartTotal';
import CartItems from './Layout/components/CartItems'
import { CarouselItem } from 'react-bootstrap';

function CartDetails() {
    return (
      <div>
        <Header img={"carousel-2.jpg"} name={"cart"}/>
        <CartItems/>
        <CartTotal/>
      </div>
    );
  }
  
  export default CartDetails;
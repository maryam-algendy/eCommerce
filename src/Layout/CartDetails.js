import React from 'react';
import Header from './components/Header';
import CartTotal from './components/Blocks/CartTotal';
import CartItems from './components/Blocks/CartItems'

function CartDetails() {
    return (
      <div>
        <Header img={"/carousel-2.jpg"} name={"cart"}/>
        <CartItems/>
        <CartTotal/>
      </div>
    );
}

export default CartDetails;
import React from 'react';
import Header from './Layout/components/Header';
import CartTotal from './Layout/components/Blocks/CartTotal';
import CartItems from './Layout/components/Blocks/CartItems'

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
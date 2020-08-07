import React ,{useState} from 'react';
import {Image, Button,FormControl} from 'react-bootstrap';

const CartItems= ()=>{
    const [counter,setCounter]=useState(1);
    const countUp=(e) =>{
        setCounter(counter+1)
    }
    const countDown=() =>{
        if (counter>1){
            setCounter(counter-1)
        }
    }
    

    return(
        <div className="cart-items">
            <div className="row th">
                <div className="col-2"><span></span></div>
                <div className="col-3">PRODUCT</div>
                <div className="col-1">PRICE</div>
                <div className="col-3">quantity</div>
                <div className="col-1">TOTAL</div>
            </div>
            <div className="row tb">
                <div className="col-2"><Image src="features-2.jpg"/></div>
                <div className="col-3">Men Tshirt</div>
                <div className="col-1">$36.00</div>
                <div className="col-3">
                    <div className="quantity">
                        <Button onClick={countDown}>-</Button>
                        <span id="val">{counter}</span>

                        <Button onClick={countUp}>+</Button>
                    </div>
                </div>
                <div className="col-1">$36.00</div>
            </div>
            <div className="row tb">
                <div className="col-2"><Image src="features-3.jpg"/></div>
                <div className="col-3">	Mug Adventure</div>
                <div className="col-1">$16.00</div>
                <div className="col-3">
                    <div className="quantity">
                        <Button onClick={countDown}>-</Button>
                        <span>{counter}</span>
                        <Button onClick={countUp}>+</Button>
                    </div>
                </div>
                <div className="col-1">$16.00</div>
            </div>

            <div className="row confirm">
                <div>
                <FormControl placeholder="Coupon Code"/>
                <Button>APPLY COUPON</Button>
                </div>
                <Button>UPDATE CART</Button>
            </div>
        </div>
    )
}
export default CartItems;
import React ,{useState} from 'react';
import {Image, Button,FormControl} from 'react-bootstrap';

const products=[
    {
        id:'0',
        link:'features-2.jpg',
        name:'Men Tshirt',
        cost:'36.00',
        quantity:'1',
        total:'36.00'
    },
    {
        id:'1',
        link:'features-3.jpg',
        name:'Mug Adventure',
        cost:'16.00',
        quantity:'1',
        total:'16.00'
    }

]

const CartItems= ()=>{
    const [quantity,setQuantity]=useState(1);
    function countUp(q,id){
        const newQuantity=parseInt(q)
        setQuantity(newQuantity+1);
        products[id].quantity=newQuantity+1;
        products[id].total=(products[id].cost*products[id].quantity).toFixed(2)
    }
    const countDown=(q,id) =>{
        if (quantity>1){
          const newQuantity=parseInt(q);
            setQuantity(newQuantity-1);
            products[id].quantity=newQuantity-1;
            products[id].total=(products[id].total-products[id].cost).toFixed(2);
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
            {
                products.map((product,id)=>{
                    return(
                        <div key={id} className="row tb">
                            <div className="col-2"><Image src={product.link}/></div>
                            <div className="col-3">{product.name}</div>
                            <div className="col-1">${product.cost}</div>
                            <div className="col-3">
                                <div className="quantity">
                                    <Button onClick={() => countDown(product.quantity,product.id)}>-</Button>
                                    <span id="val">{products[id].quantity}</span>
                                    <Button onClick={() => countUp(product.quantity,product.id)}>+</Button>
                                </div>
                            </div>
                            <div className="col-1">${product.total}</div>
                        </div>
                    )
                  
                })
            }
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
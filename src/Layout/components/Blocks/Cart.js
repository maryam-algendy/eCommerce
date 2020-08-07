import React from 'react';
import {Image} from "react-bootstrap";
import { Link } from 'react-router-dom';

const items=
[
    {
        title:"White Shirt With Pleat Detail Back",
        cost:"1 x $19.00",
        link:"cart-1.jpg"
    },
    {
        title:"Converse All Star Hi Black Canvas",
        cost:"1 x $39.00",
        link:"cart-2.jpg"
    },
    {
        title:"Nixon Porter Leather Watch In Tan",
        cost:"1 x $17.00",
        link:"cart-3.jpg"
    }


]
class Cart extends React.Component{
    render(){
        return (
            <div className="cart text-left p-3 py-4">
                {
                    items.map((item,id)=>{
                        return(
                            <div key={id} className="row mb-2">
                                <div className="col-3">
                                    <a href="/"><Image src={item.link}/><div className="overlay">x</div></a>
                                </div>
                                <div className="col-9">
                                    <a href="/">{item.title}</a>
                                    <span>{item.cost}</span>
                                </div>
                            </div>
                        )

                    })
                }
                <p className="text-right">Total: $75.00</p>
                <div className="row">
                    <div className="col-6 pr-1">
                        <Link to='/cartDetails'>view cart</Link>
                    </div>
                    <div className="col-6 pl-1">
                        <Link to='/'>check out</Link>
                    </div>
                </div>
            </div>
        )
    };
};

export default Cart;
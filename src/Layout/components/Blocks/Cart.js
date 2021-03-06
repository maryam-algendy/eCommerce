import React,{useEffect, useRef, useState} from 'react';
import {Image} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartProducts} from '../../../redux/action';

export default (props) =>{
    const [display ,setDisplay]=useState("d-block")
    const node =useRef();
    useEffect(()=>{
        document.addEventListener("mousedown",handelClick);
        return()=>{
            document.removeEventListener("mousedown",handelClick)
        }
    },[])

    const handelClick=e=>{
        if(node.current.contains(e.target)){
            return;
        }
        setDisplay("d-none");
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCartProducts());
    }, [dispatch]);

    const items = useSelector(state => state.cartProducts)
    return (
        <div ref={node} className={`cart text-left p-3 py-4 ${display}`+props.visibilityStatus }>
            {
               (items || []).slice(items.length-3,items.length).map((item,id)=>{
                    return(
                        <div key={id} className="row mb-2">
                            <div className="col-3">
                                <Link to="/"><Image src={item.link}/><div className="overlay">x</div></Link>
                            </div>
                            <div className="col-9">
                                <Link to="/">{item.name}</Link>
                                <span>{item.quantity}x{item.cost}</span>
                            </div>
                        </div>
                    )

                })
            }
            <p className="text-right">Total: $75.00</p>
            <div className="row">
                <div className="col-6 pr-1">
                    <Link to='/cart-details'>view cart</Link>
                </div>
                <div className="col-6 pl-1">
                    <Link to='/'>check out</Link>
                </div>
            </div>
        </div>
    )
};
import React,{useEffect} from 'react';
import {Image} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBlogFeatures} from '../../../action';

export default (props) =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogFeatures());
    }, [dispatch]);

    const items = useSelector(state => state.blogFeatures)
    return (
        <div className={"cart text-left p-3 py-4 "+props.visibilityStatus}>
            {
               (items || []).slice(0,3).map((item,id)=>{
                    return(
                        <div key={id} className="row mb-2">
                            <div className="col-3">
                                <Link to="/"><Image src={item.link}/><div className="overlay">x</div></Link>
                            </div>
                            <div className="col-9">
                                <Link to="/">{item.title}</Link>
                                <span>{item.cost}</span>
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
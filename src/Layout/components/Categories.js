import React ,{useEffect}from "react";
import {Image} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {fetchCategories} from '../../action';
import {useSelector ,useDispatch} from 'react-redux'

export default()=>{

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchCategories());
},[dispatch])
const cats= useSelector(state=>state.categories)

        return(
        <div className="categories container py-5">
            {
               cats.map((cat,id)=>{
                    return(
                        <div key={id} className={cat.class}>
                    <Image src={cat.link}/>
                    <Link to="/">{cat.btn}</Link>
                </div>
                    )
                })
            }
                <div className="item-6 text-center">
                    <div>
                        <h4>sign up & get 20% off</h4>
                        <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                        <Link to="/">sign up</Link>
                    </div>
                 </div>
        </div>
     )
    
};

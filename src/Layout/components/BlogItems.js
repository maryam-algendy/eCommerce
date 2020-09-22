import React, { useEffect } from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBlogItems} from '../../redux/action';

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogItems());
    }, [dispatch]);

    const blogs = useSelector(state => state.blogItems)
    return(
        <div className="col-lg-9 col-md-8">
        {
            (blogs || []).map((item,id)=>{
                return(
                    <div key={id} className="blog-item">
                        <div className="img-side">
                        <Link to={`/blog-details/${item.id}`}><Image src={item.link}/></Link>
                            <span>{item.date}</span>
                        </div>
                        <div className="desc">
                            <h4><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h4>
                            <span>By Admin | Cooking, Food | 8 Comments</span>
                            <p>{item.desc}</p>
                            <Link to={`/blog-details/${item.id}`}>Continue Reading <i className="fas fa-long-arrow-alt-right"> </i></Link>
                        </div>
                    </div>
                )
            })
        }
        </div> 
    );
}
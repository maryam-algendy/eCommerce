import React from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchBlogItems} from '../../action';

const BlogItems =(props)=>{
        console.log(props.match.parmas);
        return(
            <div className="col-lg-9 col-md-8">
            {
                this.props.items.map((item,id)=>{
                    return(
                        <div key={id} className="blog-item">
                            <div className="img-side">
                                <Image src={item.link}/>
                                <span>{item.date}</span>
                            </div>
                            <div className="desc">
                                <h4><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h4>
                                <span>By Admin | Cooking, Food | 8 Comments</span>
                                <p>{item.desc}</p>
                                <Link to={`/blog-details/${item.id}`}>Continue Reading <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    )
                })
            }
           </div> 
        )
    
};
const mapStateToProps=(state)=>{
    return {
        items:state.blogItems
    }
}
export default connect(mapStateToProps,{fetchBlogItems}) (BlogItems);
import React from 'react';
import Header from './Layout/components/Header';
import BlogNav from './Layout/components/BlogNav';
import BlogInformation from './Layout/components/BlogInformation'
import {Link} from 'react-router-dom';


function BlogDetails(props) {
  const id =props.match.params.id;
    return (
      <div>
        <Header img={"/blog.jpg"} name={"BLOG"}/>
        <div className="blog-content px-3">
          <div className="pass pl-xl-5 mt-4">
            <Link to="/">home<i className="fas fa-angle-right"> </i></Link>
            <Link to="/blog">blog<i className="fas fa-angle-right"> </i></Link>
            Black Friday Guide: Best Sales & Discount Codes
          </div>
              <div className="container">
                <div className="row py-5">
                          <BlogInformation id={id}/>
                          <BlogNav/>
                  </div>
              </div>
            </div>
      </div>
    );
  }
  
  export default BlogDetails;
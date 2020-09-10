import React from 'react';
import Header from './Layout/components/Header';
import BlogNav from './Layout/components/BlogNav';
import BlogDetail from './Layout/components/BlogDetail'
import {Link} from 'react-router-dom';


function BlogDetails() {
    return (
      <div>
        <Header img={"blog.jpg"} name={"BLOG"}/>
        <div className="blog-content px-3">
          <div className="pass px-xl-5 mt-4">
            <Link to="/">home<i className="fas fa-angle-right"></i></Link>
            <Link to="/blog">blog<i className="fas fa-angle-right"></i></Link>
            Black Friday Guide: Best Sales & Discount Codes
          </div>
                <div className="row py-5 px-xl-5">
                        <BlogDetail/>
                        <BlogNav/>
                </div>
            </div>
      </div>
    );
  }
  
  export default BlogDetails;
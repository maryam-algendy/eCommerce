import React from 'react';
import Header from './Layout/components/Header';
import BlogItems from './Layout/components/BlogItems';
import BlogNav from './Layout/components/BlogNav';

function Blog() {
    return (
      <div>
        <Header img={"/blog.jpg"} name={"BLOG"}/>
        <div className="blog-content py-5 px-3">
                <div className="row px-xl-5">
                        <BlogItems/>
                        <BlogNav/>
                        
                </div>
            </div>
      </div>
    );
  }
  
  export default Blog;
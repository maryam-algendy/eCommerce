import React from 'react';
import Header from './components/Header';
import BlogItems from './components/BlogItems';
import BlogNav from './components/BlogNav';

function Blog() {
    return (
      <div>
        <Header img={"/blog.jpg"} name={"BLOG"}/>
        <div className="blog-content container px-xl-0 py-5 px-3">
                <div className="row">
                        <BlogItems/>
                        <BlogNav/>
                        
                </div>
            </div>
      </div>
    );
  }
  
  export default Blog;
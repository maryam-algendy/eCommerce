import React from 'react';
import {InputGroup,Button,FormControl,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchBlogFeatures,fetchBlogArchive} from '../../redux/action';


class BlogNav extends React.Component{
    componentDidMount(){
        this.props.fetchBlogFeatures();
        this.props.fetchBlogArchive();


    }
    render(){
        return(
            <div className="col-lg-3 col-md-4">
                <InputGroup>
                    <FormControl placeholder="Search" aria-describedby="basic-addon1" />
                        <Button><i className="fas fa-search"></i></Button>
                </InputGroup> 
                <div className="category">
                    <h4>Categories</h4>
                    <Link to="/blog">Fashion</Link>
                    <Link to="/blog">Beauty</Link>
                    <Link to="/blog">Street Style</Link>
                    <Link to="/blog">Life Style</Link>
                    <Link to="/blog">DIY & Crafts</Link>
                </div>
                <div className="featured-products">
                    <h4>Featured Products</h4>
                    {
                       this.props.features.map((item,id)=>{
                            return(
                                    <div key={id} className="row mb-3">
                                        <div className="col-md-4 col-2">
                                            <Link to="/"><Image src={item.link}/><div className="overlay"></div></Link>
                                        </div>
                                        <div className="col-md-8 col-10">
                                            <Link to="/">{item.title}</Link>
                                            <span>{item.cost}</span>
                                        </div>
                                            </div>
                                    )
                                        })
                                    }
                </div>
                <div className="archive">
                    <h4>archive</h4>
                    {
                        this.props.arc.map((item,id)=>{
                            return(
                                <div key={id} className="row">
                                    <div className="col-8">
                                        <Link to='/blog'>{item.date}</Link>
                                    </div>
                                    <div className="col-4 text-right">{item.num}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tags">
                    <h4>tags</h4>
                    <Link to="/blog">Fashion</Link>
                    <Link to="/blog">lifestyle</Link>
                    <Link to="/blog">denim</Link>
                    <Link to="/blog">streetstyle</Link>
                    <Link to="/blog">crafts</Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        features:state.blogFeatures,
        arc:state.blogArchive
    }
}
export default connect(mapStateToProps,{fetchBlogFeatures,fetchBlogArchive})(BlogNav);
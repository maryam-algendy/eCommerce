import React from "react";
import {Image} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCategories} from '../../action';

class Categories extends React.Component{
        componentDidMount(){
            this.props.fetchCategories();
        }

    render(){
        return(
        <div className="categories container py-5">
            {
                this.props.cats.map((cat,id)=>{
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
    }
};
const mapStateToProps=(state)=>{
    return{
        cats:state.categories
    }
}

export default connect(mapStateToProps,{fetchCategories}) (Categories);
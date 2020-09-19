import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchShipping} from '../../action';

class Shipping extends React.Component{
    componentDidMount(){
        this.props.fetchShipping();
    }
    render(){
        return(
            <div className="shipping container py-5">
                <div className="row">
                    {
                        this.props.items.map((item,id)=>{
                            return(
                                <div key={id} className="col-sm-4 text-center py-2">
                                <h4>{item.header}</h4>
                                <Link to="/" className={item.btnHidden}>{item.btn}</Link>
                                <p>{item.desc}</p>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        )
    }
};
const mapStateToProps=(state)=>{
    return{
        items:state.shipping
    }
}

export default connect(mapStateToProps,{fetchShipping}) (Shipping);
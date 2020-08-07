import React from 'react';
import {Link} from 'react-router-dom';

 const items=[
    {
        header:"Free Delivery Worldwide",
        btn:"Click here for more info"
    },
    {
        header:"30 Days Return",
        desc:"Simply return it within 30 days for an exchange.",
        btnHidden:"none"
    },
    {
        header:"Store Opening",
        desc:"Shop open from Monday to Sunday",
        btnHidden:"none"
    }
 ]

class Shipping extends React.Component{
    render(){
        return(
            <div className="shipping container py-5">
                <div className="row">
                    {
                        items.map((item,id)=>{
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
}
export default Shipping;
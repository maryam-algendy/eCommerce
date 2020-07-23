import React from "react";
import {Image,Button} from "react-bootstrap";



class Counter extends React.Component{
    render(){
        return(
            <div className="counter">
                 <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lhs text-center">
                            <Image src="counter-1.jpg"/>
                            <div className="desc">
                                <span>the beauty</span>
                                <h3>lookbook</h3>
                                <Button>view collection</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 rhs text-center">
                            <Image src="counter-2.jpg"/>
                            <div className="desc">
                                <Button>Gafas sol Hawkers one</Button>
                                <del>$29.50</del>
                                <span className="cost">$15.90</span>
                                <div className="row pt-5">
                                <div className="col-3 day">
                                        <span>10</span>
                                        <p>days</p>
                                    </div>
                                    <div className="col-3 hr">
                                        <span>20</span>
                                        <p>hrs</p>
                                    </div>
                                    <div className="col-3 min">
                                        <span>10</span>
                                        <p>mins</p>
                                    </div>
                                    <div className="col-3 sec">
                                        <span>10</span>
                                        <p>secs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        )
    }
}

export default Counter;
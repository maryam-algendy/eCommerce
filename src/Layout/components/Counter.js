import React from "react";
import {Image} from "react-bootstrap";
import Countdown from "react-countdown";
import {Link} from 'react-router-dom';

const countDownDate = new Date("october 1, 2020 00:00:00").getTime();
const now = new Date().getTime();

const renderer1 = ({days}) => {
    return<span>{days}</span>
    }
    const renderer2 = ({hours}) => {
        return<span>{hours}</span>
        }
        const renderer3 = ({minutes}) => {
            return<span>{minutes}</span>
            }
            const renderer4 = ({seconds}) => {
                return<span>{seconds}</span>
                }


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
                                <Link to="/">view collection</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 rhs text-center">
                            <Image src="counter-2.jpg"/>
                            <div className="desc">
                                <Link to="/">Gafas sol Hawkers one</Link>
                                <del>$29.50</del>
                                <span className="cost">$15.90</span>
                                <div className="row pt-0 pt-md-5">
                                <div className="col-3 day">
                                <Countdown date={Date.now() +( countDownDate-now)} renderer={renderer1}  />
                                        <p>days</p>
                                    </div>
                                    <div className="col-3 hr">
                                    <Countdown date={Date.now() +( countDownDate-now)} renderer={renderer2}  />
                                        <p>hrs</p>
                                    </div>
                                    <div className="col-3 min">
                                    <Countdown date={Date.now() +( countDownDate-now)} renderer={renderer3}  />
                                        <p>mins</p>
                                    </div>
                                    <div className="col-3 sec">
                                       <Countdown date={Date.now() +( countDownDate-now)} renderer={renderer4}  />
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






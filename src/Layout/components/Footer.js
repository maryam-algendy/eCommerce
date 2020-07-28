import React from 'react';
import {Form ,Button,Image } from 'react-bootstrap';


class Footer extends React.Component{
    render()
        {
            return(
                <div className="footer">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h4>GET IN TOUCH</h4>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St,
                                 New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="social">
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                            <a href="/"><i className="fab fa-snapchat-ghost"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-4">
                            <h4>CATEGORIES</h4>
                            <ul className="list-unstyled">
                            <li><a href="/">Men</a></li>
                            <li><a href="/">Women</a></li>
                            <li><a href="/">Dresses</a></li>
                            <li><a href="/">Sunglasses</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                        <h4>LINKS</h4>
                            <ul className="list-unstyled">
                            <li><a href="/">Search</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Returns</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                        <h4>CATEGORIES</h4>
                            <ul className="list-unstyled">
                            <li><a href="/">Track Order</a></li>
                            <li><a href="/">Returns</a></li>
                            <li><a href="/">Shipping</a></li>
                            <li><a href="/">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h4>NEWSLETTER</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="email@example.com" />
                                </Form.Group>
                                <Button variant="primary" type="submit">SUBSCRIBE</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="lower-footer text-center mt-5">
                    <a href="#"><Image src="paypal.png"/></a>
                    <a href="#"><Image src="visa.png"/></a>
                    <a href="#"><Image src="mastercard.png"/></a>
                    <a href="#"><Image src="express.png"/></a>
                    <a href="#"><Image src="discover.png"/></a>
                    <div className="mt-4">Copyright © 2017 Maryam. All rights reserved.</div>
                    </div>
                </div>
            )

        }
}

export default Footer;
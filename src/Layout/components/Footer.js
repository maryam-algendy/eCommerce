import React from 'react';
import {Form ,Button,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';


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
                            <Link to='/'><i className="fab fa-facebook-f"></i></Link>
                            <Link to='/'><i className="fab fa-instagram"></i></Link>
                            <Link to='/'><i className="fab fa-pinterest-p"></i></Link>
                            <Link to='/'><i className="fab fa-snapchat-ghost"></i></Link>
                            <Link to='/'><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-4">
                            <h4>CATEGORIES</h4>
                            <ul className="list-unstyled">
                            <li><Link to='/'>Men</Link></li>
                            <li><Link to='/'>Women</Link></li>
                            <li><Link to='/'>Dresses</Link></li>
                            <li><Link to='/'>Sunglasses</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                        <h4>LINKS</h4>
                            <ul className="list-unstyled">
                            <li><Link to='/'>Search</Link></li>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Contact Us</Link></li>
                            <li><Link to='/'>Returns</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-4">
                        <h4>CATEGORIES</h4>
                            <ul className="list-unstyled">
                            <li><Link to='/'>Track Order</Link></li>
                            <li><Link to='/'>Returns</Link></li>
                            <li><Link to='/'>Shipping</Link></li>
                            <li><Link to='/'>FAQs</Link></li>
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
                    <Link to='/'><Image src="paypal.png"/></Link>
                    <Link to='/'><Image src="visa.png"/></Link>
                    <Link to='/'><Image src="mastercard.png"/></Link>
                    <Link to='/'><Image src="express.png"/></Link>
                    <Link to='/'><Image src="discover.png"/></Link>
                    <div className="mt-4">Copyright © 2017 Maryam. All rights reserved.</div>
                    </div>
                </div>
            )

        }
}

export default Footer;
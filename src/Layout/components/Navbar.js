import React, {useState} from 'react';
import Cart from "./Blocks/Cart";
import {Navbar,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default () => {
    const [cartVisibility, setCartVisibility] = useState("non-visible");
    return (
        // upper nav bar
        <div className="main-nav">
            <Navbar fixed="top" expand="lg" className="px-lg-5 pb-0 pt-3 py-lg-4">
            <Navbar.Brand href="/"><Image className="pl-3 pb-3 pb-lg-0" src="logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="row mt-2 mt-lg-none">
                <div className="col-lg-11 text-lg-center">
                    <Link className="home" to="/"><span>home</span>
                    <i className="fas fa-chevron-right d-lg-none text-right"> </i>
                        <div className="home-dd">
                            <ul className="list-unstyled mb-0 ">
                                <li><Link to="/">homepage v1</Link></li>
                                <li><Link to="/">homepage v2</Link></li>
                                <li><Link to="/">homepage v3</Link></li>
                            </ul>
                        </div>
                    </Link>
                    <Link to="/sale">Shop</Link>
                    <Link to="/sale" className="sale">Sale</Link>
                    <Link to="cartDetails">Features</Link>
                    <Link to ='/'>Blog</Link>
                    <Link to ='/about'>About</Link>
                    <Link to ='/contact'>Contact</Link>

                </div>

            </div>
            </Navbar.Collapse>
            <div className="nav-icons">
                    <Link to ='/'><Image src="user-icon.png"/></Link>
                    <Button className="cart-sec" onClick={() => {
                        cartVisibility === "non-visible" ? setCartVisibility("visible") : setCartVisibility("non-visible");
                        console.log(cartVisibility)
                    }}>
                        <Image src="cart-icon.png"/>
                        <span className="cart-num">0</span>
                        <Cart visibilityStatus={cartVisibility} />
                    </Button>
                </div>
        </Navbar>
        </div>
    )
}
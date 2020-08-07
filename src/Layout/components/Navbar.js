import React from 'react';
import Cart from "./Blocks/Cart";
import {Navbar,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class navbar extends React.Component{
    render(){
        return (
            // upper nav bar
            <div className="main-nav">
                <Navbar fixed="top" expand="lg" className="px-lg-5 pb-0 pt-3 py-lg-4">
                <Navbar.Brand href="/"><Image className="pl-3 pb-3 pb-lg-0" src="logo.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className="row mt-2 mt-lg-none">
                    <div className="col-lg-11 text-lg-center">
                        <Button className="home"><span>home</span>   
                        <i className="fas fa-chevron-right d-lg-none text-right"></i>                      
                            <div className="home-dd">
                                <ul className="list-unstyled mb-0 ">
                                    <li><Link to="/">homepage v1</Link></li>
                                    <li><Link to="/">homepage v2</Link></li>
                                    <li><Link to="/">homepage v3</Link></li>
                                </ul>
                            </div>
                        </Button>
                        <Link to="/sale"> shop </Link>
                        <Link to="/sale" className="sale">sale</Link>
                        <Link to="cartDetails">features</Link>
                        <Link to ='/'>blog</Link>
                        <Link to ='/about'>about</Link>
                        <Link to ='/contact'>contact</Link>

                    </div>

                </div>
                </Navbar.Collapse>
                <div className="nav-icons">
                        <Link to ='/'><Image src="user-icon.png"/></Link>
                        <Button className="cart-sec"><Image src="cart-icon.png"/><span className="cart-num">0</span><Cart/></Button> 
                    </div>
            </Navbar>
            </div>
        )
    }
}

export default navbar;
import React from 'react';
import Cart from "./Blocks/CartBlock";
import {Navbar,Button,Image} from 'react-bootstrap';


class navbar extends React.Component{
    render(){
        return (
            // upper nav bar
            <div className="main-nav">
                <Navbar sticky="top" expand="lg" className="px-lg-5 pb-0 pt-2 py-lg-3">
                <Navbar.Brand href="/"><Image className="pl-3" src="logo.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className="row mt-2 mt-lg-none">
                    <div className="col-lg-11 text-lg-center">
                        <Button className="home"><span>home</span>   
                        <i className="fas fa-chevron-right d-lg-none text-right"></i>                      
                            <div className="home-dd">
                                <ul className="list-unstyled mb-0 ">
                                    <li><Button>homepage v1</Button></li>
                                    <li><Button>homepage v2</Button></li>
                                    <li><Button>homepage v3</Button></li>
                                </ul>
                            </div>
                        </Button>
                        <Button>shop</Button>
                        <Button className="sale">sale</Button>
                        <Button>features</Button>
                        <Button>blog</Button>
                        <Button>about</Button>
                        <Button>contact</Button>

                    </div>

                </div>
                </Navbar.Collapse>
                <div className="nav-icons">
                        <Button><i className="far fa-user"></i></Button>
                        <Button className="cart-sec"><i className="fas fa-shopping-bag"></i> <Cart/></Button> 
                    </div>
            </Navbar>
            </div>
        )
    }
}

export default navbar;
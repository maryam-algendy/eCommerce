import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import Navbar from "./Layout/components/Navbar";
import Footer from './Layout/components/Footer';
import CartDetails from './CartDetails';
import Home from './Home';
import Contact from './Contact';
import Sale from './Sale';
import About from './About';
import Blog from './Blog'
import BlogDetails from './BlogDetails';
import history from "./history";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Portal() {

	return (
		<div className="Portal">
			<BrowserRouter>
			<div>
			{/*<Navbar/>*/}
			<Switch>
			<Route path='/' exact component={Home}/>
			<Route path='/cart-details' exact component={CartDetails}/>
			<Route path='/sale' exact component={Sale}/>
			<Route path='/about' exact component={About}/>
			<Route path='/contact' exact component={Contact}/>
			<Route path='/blog' exact component={Blog}/>
			<Route path='/blog-details/:id' exact component={BlogDetails}/>
			<Route path='/log-in' exact component={LogIn}/>
			<Route path='/sign-up' exact component={SignUp}/>
			</Switch>
			{/*<Footer/>*/}
			</div>
			</BrowserRouter>
		</div>
	);
}

export default Portal;

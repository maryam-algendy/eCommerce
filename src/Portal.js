import React, {useState} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import Navbar from "./Layout/components/Navbar";
import Footer from './Layout/components/Footer';
import CartDetails from './Layout/CartDetails';
import Home from './Layout/Home';
import Contact from './Layout/Contact';
import Sale from './Layout/Sale';
import About from './Layout/About';
import Blog from './Layout/Blog'
import BlogDetails from './Layout/BlogDetails';
import InvalidRoute from "./Layout/components/Blocks/InvalidRoute";
import Account from "./Layout/Account";

function Portal() {

	const [user, setUser] = useState(false);

	const handleUserStatus = (status) => {
		setUser(status)
	}

	return (
		<div className="Portal">
			<BrowserRouter>
				<div>
					{user ? null : <Navbar/>}
					<Switch>
						<Route path='/' exact component={Home}/>
						<Route path='/cart-details' exact component={CartDetails}/>
						<Route path='/sale' exact component={Sale}/>
						<Route path='/about' exact component={About}/>
						<Route path='/contact' exact component={Contact}/>
						<Route path='/blog' exact component={Blog}/>
						<Route path='/blog-details/:id' exact component={BlogDetails}/>
						<Route path='/user/:page' exact component={(props) => <Account handleUserStatus={(e) => handleUserStatus(e)} {...props} />}/>
						<Route path='*' exact component={(props) => <InvalidRoute handleUserStatus={(e) => handleUserStatus(e)} {...props} />}/>
					</Switch>
					{user ? null : <Footer/>}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default Portal;

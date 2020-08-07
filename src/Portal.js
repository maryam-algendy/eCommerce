import React from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import Navbar from "./Layout/components/Navbar";
import Footer from './Layout/components/Footer';
import CartDetails from './CartDetails';
import Home from './Home';
import Contact from './Contact';
import Sale from './Sale';
import About from './About';

function Portal() {
  return (
    <div className="Portal">
      <BrowserRouter>
      <div>
      <Navbar/>
      <Route path='/' exact component={Home}/>
      <Route path='/cartDetails' exact component={CartDetails}/>
      <Route path='/sale' exact component={Sale}/>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default Portal;

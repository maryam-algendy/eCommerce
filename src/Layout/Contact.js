import React from 'react';
import Header from './components/Header';
import Apps from './components/ContactUs'
function Contact() {
    return (
      <div>
        <Header img={"/contact.jpg"} name={"contact"}/>
        <Apps/>
      </div>
    );
  }
  
  export default Contact;
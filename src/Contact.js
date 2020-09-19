import React from 'react';
import Header from './Layout/components/Header';
import Apps from './Layout/components/ContactUs'
function Contact() {
    return (
      <div>
        <Header img={"/contact.jpg"} name={"contact"}/>
        <Apps/>
      </div>
    );
  }
  
  export default Contact;
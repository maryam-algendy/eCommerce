import React from 'react';
import Header from './components/Header';
import OurStory from './components/OurStory'

function About() {
    return (
      <div>
        <Header img={"/contact.jpg"} name={"about"}/>
        <OurStory/>
      </div>
    );
  }
  
  export default About; 
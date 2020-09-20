import React from 'react';
import Header from './Layout/components/Header';
import OurStory from './Layout/components/OurStory'

function About() {
    return (
      <div>
        <Header img={"/contact.jpg"} name={"about"}/>
        <OurStory/>
      </div>
    );
  }
  
  export default About; 
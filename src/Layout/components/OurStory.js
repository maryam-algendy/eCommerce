import React from 'react';
import {Image} from 'react-bootstrap';

class OurStory extends React.Component{
    render(){
        return(
            <div className="our-story py-5 px-2 px-lg-5">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                        <Image src="about.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>Our story</h3>
                        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                             Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan,
                              vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra.
                         Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit,
                         quis condimentum ex semper sit amet. Fusce eget ligula magna.
                         Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
                          Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis,
                           eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
                            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
                            et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies.
                             Sed vitae ultrices orci.</p>
                        <p className="l-border">Creativity is just connecting things. When you ask creative people how they did something,
                             they feel a little guilty because they didn't really do it, they just saw something.
                            It seemed obvious to them after a while. <span>- Steve Job’s</span></p>
                            
                    </div>  
                </div>
            </div>
        )
    }
}
export default OurStory;
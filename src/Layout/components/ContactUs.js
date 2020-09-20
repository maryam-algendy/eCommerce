import React from "react";
import {Form ,Button} from 'react-bootstrap';
import Map from './Blocks/Map'

 const ContactUs=()=> {
  return (
    <div className="contact-us container px-xl-0 p-5">
        <div className="row">
            <div className="col-md-6">
                <Map/>
            </div>
            <div className="col-md-6 px-4 pt-3">
                <h4>Send us your message</h4>
                <Form>
                    <Form.Control  placeholder="Full Name"/>
                    <Form.Control placeholder="Phone Number"/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address"/>
                    </Form.Group>
                    <Form.Control placeholder="Message" as="textarea" rows="4"/>
                    <Button>send</Button>
                </Form>
            </div>
        </div>
     </div>
  );
}

export default ContactUs;

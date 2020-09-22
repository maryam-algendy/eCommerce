import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";

const Register= () =>{
    return(
        <div className="log-in">
            <div className="text-center container">
                <div className="ll">
                    <h2>log in</h2>
                    <p>Please fill in the information bellow:</p>
                    <Form>
                        <Form.Control  placeholder="Full Name"/>
                        <Form.Control placeholder="Phone Number"/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address"/>
                        </Form.Group>
                        <Form.Control type="password" placeholder="Password"/>
                        <Button type="submit">create my account</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Register;
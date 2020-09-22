import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";

const LogInForm= (props) =>{

    if(props.location.pathname === "/reset") {
        props.handleUserStatus(true);
    }

    return(
        <div className="log-in">
            <div className="text-center container">
                <div className="ll">
                    <h2>Reset Password</h2>
                    <p>Please enter your e-mail and check your inbox</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address"/>
                        </Form.Group>
                        <Button type="submit">send</Button>
                    </Form>
                    <span>or <Link to="/log-in">Login</Link></span>
                </div>
            </div>
        </div>
    )
}
export default LogInForm;
import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";

const LogInForm= () =>{
 return(
     <div className="log-in">
         <div className="text-center container">
             <div className="ll">
                 <h2>log in</h2>
                 <p>Please enter your e-mail and password</p>
                 <Form>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Email Address"/>
                     </Form.Group>
                     <div className="pass">
                         <Form.Control type="password" placeholder="Password"/>
                         <Link to="/reset">forget password ?</Link>
                     </div>
                     <Button type="submit">send</Button>
                 </Form>
                 <span>Don't have an account? <Link to="/sign-up">Create one</Link></span>
             </div>
         </div>
     </div>
 )
}
export default LogInForm;
import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";
import {firebase} from "../../../Firebase/config";

const LogInForm= (props) =>{

    const [form,setForm]=useState({});
    const [error,setError]=useState("");
    console.log(error)
    const errs={
        "There is no user record corresponding to this identifier. The user may have been deleted.":"there is no account registered with this date",
        "The email address is badly formatted.":"Please enter a valid email",
        "The password is invalid or the user dose not have a password.":"Invalid Password",
        "Too many unsuccessful login attempts. please try again later.":"Please try again"
    }

    const HandleUserLogIn =()=>{
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then(()=>{
            setError("Log in successfully");
            props.history.push("/")
        }).catch(function(error) {
            setError(errs[error.message]);
            console.log(error)
        });
    }
    var color="";
    if (error==="Log in successfully"){
        color="green";
    }
    else{
        color="red";
    }

    return(
     <div className="log-in">
         <div className="text-center container">
             <div className="ll">
                 <h2>log in</h2>
                 <p>Please enter your e-mail and password</p>
                 <Form>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Control onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email Address"/>
                     </Form.Group>
                     <div className="pass">
                         <Form.Control onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" placeholder="Password"/>
                         <Link to="/reset">forget password ?</Link>
                     </div>
                     <span style={{color:color}} className="err">{error}</span>
                     <Button onClick={(e)=> {
                         e.preventDefault()
                         HandleUserLogIn()}}
                         type="submit">send</Button>
                 </Form>
                 <span>Don't have an account? <Link to="/sign-up">Create one</Link></span>
             </div>
         </div>
     </div>
 )
}
export default LogInForm;
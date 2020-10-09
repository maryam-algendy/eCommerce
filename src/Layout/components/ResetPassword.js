import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";
import {firebase} from "../../Firebase/config";

const LogInForm= (props) =>{

    if(props.location.pathname === "/reset") {
        props.handleUserStatus(true);
    }
    const [form,setForm]=useState({});
    const [error,setError]=useState("");
    console.log(error)
    const errs={
        "There is no user record corresponding to this identifier. The user may have been deleted.":"there is no account registered with this date",
        "The email address is badly formatted.":"Please enter a valid email",
    }



    const HandleResetPassword =()=>{
        firebase.auth().sendPasswordResetEmail(form.email).then(()=>{
            setError("Success! check your inbox");
            props.history.push("/")
        }).catch(function(error) {
            setError(errs[error.message]);
            console.log(error)
        });
    }
    var color="";
    if (error==="Success! check your inbox"){
        color="green";
    }
    else{
        color="red";
    }


    return(
        <div className="log-in">
            <div className="text-center container">
                <div className="ll">
                    <h2>Reset Password</h2>
                    <p>Please enter your e-mail and check your inbox</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email Address"/>
                        </Form.Group>
                        <span style={{color:color}} className="err">{error}</span>
                        <Button onClick={(e)=> {
                            e.preventDefault()
                            HandleResetPassword()}}
                                type="submit">send</Button>
                    </Form>
                    <span>or <Link to="/log-in">Login</Link></span>
                </div>
            </div>
        </div>
    )
}
export default LogInForm;
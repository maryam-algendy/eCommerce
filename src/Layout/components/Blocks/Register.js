import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {firebase} from "../../../Firebase/config";


const Register= () =>{
    const [form,setForm]=useState({});
    const [error,setError]=useState("");
    console.log(error)
    const errs={
        "Password should be at least 6 characters":"Password should be at least 6 characters.",
        "The email address is already in use by another account.":"The email address is already in use.",
        "The email address is badly formatted.":"Please enter a valid email"
    }
    const canContinue=form.full_name && form.email && form.password;
    const verificationEmail=()=>{
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then(()=>{
            setError("Success! check your inbox to verify your account");
            setTimeout(()=>{},1500)

        }).catch((error)=>{console.log(error)})
    };

    const updateProfile=(name)=>{
        let user =firebase.auth().currentUser;
        user.updateProfile({displayName:name}).catch((error)=>{
            console.log("Error from updateProfile>>" , error)
        });
    }

    const HandleUserRegister =()=>{
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then(()=>{
            updateProfile(form.full_name);
            verificationEmail();
        }).catch(function(error) {
            setError(errs[error.message]);
            console.log(error)
        });
    }
     var color="";
        if (error==="Success! check your inbox to verify your account"){
            color="green";
        }
        else{
            color="red";
        }

    return(
        <div className="log-in">
            <div className="text-center container">
                <div className="ll">
                    <h2>sign up</h2>
                    <p>Please fill in the information bellow:</p>
                    <Form>
                        <Form.Control onChange={(e) => setForm({ ...form, full_name: e.target.value })}  placeholder="Full Name"/>
                        <Form.Control placeholder="Phone Number"/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email Address"/>
                        </Form.Group>
                        <Form.Control onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" placeholder="Password"/>
                        <span style={{color:color}} className="err">{error}</span>
                        <Button onClick={(e)=> {
                            e.preventDefault()
                            HandleUserRegister()
                        }} type="submit">create my account</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Register;
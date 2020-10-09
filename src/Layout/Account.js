import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from  "react-router-dom";
import {firebase} from "../Firebase/config";
import InvalidRoute from "./components/Blocks/InvalidRoute";

/**
 * Function that handles UserLogin.
 * @param {email, password} - User Data to check if user recorded.
 * @param props - param that received from parent router page to handle status onSuccess.
 * @returns { User Status } - Send User Data to firebase auth system to check if user registered & get user status and full user data.
**/

const LogInForm= (props) =>{

    const [form,setForm]=useState({});
    const [error,setError]=useState("");

    const errs={
        "There is no user record corresponding to this identifier. The user may have been deleted.":"there is no account registered with this date",
        "The email address is badly formatted.":"Please enter a valid email",
        "The password is invalid or the user does not have a password.":"Invalid Password"
    }

    const HandleUserLogIn =()=>{
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(()=>{
            setError("Log in successfully");

            props.history.push("/");
        })
            .catch((error) => {
            setError(errs[error.message]);
        });
    }
    let color="";
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
                            <Link to="/user/reset">forget password ?</Link>
                        </div>
                        <span style={{color:color}} className="err">{error}</span>
                        <Button onClick={(e)=> {
                            e.preventDefault()
                            HandleUserLogIn()}}
                                type="submit">send</Button>
                    </Form>
                    <span>Don't have an account? <Link to="/user/sign-up">Create one</Link></span>
                </div>
            </div>
        </div>
    )
}

/**
 * Function that handles UserRegister.
 * @param {email, password, full_name} - User Data to create new account for him.
 * @returns { Register Status } - Send User Data to firebase auth system to create new account.
**/

const Register= () =>{
    const [form,setForm]=useState({});
    const [error,setError]=useState("");
    console.log(error)
    const errs={
        "Password should be at least 6 characters":"Password should be at least 6 characters.",
        "The email address is already in use by another account.":"The email address is already in use.",
        "The email address is badly formatted.":"Please enter a valid email"
    }
    const canContinue=form.full_name;
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
                        {error ? <span style={{color: color}} className="err">{error}</span> : null}
                        <Button onClick={(e)=> {
                            e.preventDefault()
                            HandleUserRegister();
                        }} type="submit"
                                disabled={!canContinue}
                        >
                            create my account
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

/**
 * Function that handles ForgetPassword.
 * @param {email} - User email to check if user recorded & send changePasswordEmail.
 * @param props - param that received from parent router page to handle status onSuccess.
 * @returns { void }
 **/

const ResetPassword= (props) =>{

    if(props.location.pathname === "/reset") {
        props.handleUserStatus(true);
    }
    const [form,setForm]=useState({});
    const [error,setError]=useState("");

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
    let color="";
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
                    <span>or <Link to="/user/log-in">Login</Link></span>
                </div>
            </div>
        </div>
    )
}

/**
 * Function that handles UserRoutes.
 * @param {Route PathName} - The PathName required.
 * @param props - param that received from BrowserRouter to handle status if this page should not have Navbar & footer and handling user behaviour.
 * @returns { Selected Component } - Show specific function that required by user.
**/

export default (props) => {
    const location = props.location.pathname;

    if(location === "/user/log-in" || location === "/user/sign-up" || location === "/user/reset") {
        props.handleUserStatus(true)
    }

    switch (location) {
        case "/user/log-in":
            return <LogInForm {...props} />

        case "/user/sign-up":
            return <Register />

        case "/user/reset":
            return <ResetPassword {...props} />

        default:
            return <InvalidRoute />
    }
}
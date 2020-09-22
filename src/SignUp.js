import React from "react";
import Register from "./Layout/components/Register";


function SignUp(props) {

    if(props.location.pathname === "/sign-up") {
        props.handleUserStatus(true);
    }

    return(
        <div>
            <Register/>
        </div>
    )
}
export default SignUp;
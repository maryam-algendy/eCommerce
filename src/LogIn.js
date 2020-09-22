import React from "react";
import LogInForm from "./Layout/components/LogInForm";


function LogIn(props) {

    if(props.location.pathname === "/log-in") {
        props.handleUserStatus(true);
    }

    return(
        <div>
            <LogInForm/>
        </div>
    )
}
export default LogIn;
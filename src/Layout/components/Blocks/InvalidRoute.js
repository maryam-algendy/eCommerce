import React from "react";

import "./style/InvalidRoute.scss";

export default (props) => {

    if(props.match.path === "*") {
        props.handleUserStatus(true);
    }

    return <div id="invalid">
        <h1>404</h1>
        <h1>Not found</h1>
    </div>
}
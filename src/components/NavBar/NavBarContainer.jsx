import React from "react";
import {withRouter} from "react-router-dom";
import {NavBar} from "./NavBar";

const NavBarContainer = (props) => {
    return <NavBar {...props} />
}


export default withRouter(NavBarContainer);
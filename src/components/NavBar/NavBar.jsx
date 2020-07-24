import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";

export const NavBar = (props) => {

    return (
        <div className={"navStyle"}>
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link className={props.location.pathname === "/home" ? "nav-link active" : "nav-link"} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                              role="tab" aria-controls="v-pills-home" aria-selected="true" to={"/home"}>Home</Link>
                        <Link className={props.location.pathname === "/store" ? "nav-link active" : "nav-link"} id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                              role="tab" aria-controls="v-pills-profile" aria-selected="false" to={"/store"}>Store</Link>
                    </div>
                </div>

            </div>
        </div>
      )


}
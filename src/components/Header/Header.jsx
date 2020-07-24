import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

export const Header = (props) => {

    return <div className={"myHeader"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home"> Redux Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className={props.location.pathname === "/home" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link"  to={"/home"}>Home</Link>
                    </li>
                    <li className={props.location.pathname === "/store" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to={"/store"}>Store</Link>
                    </li>
                    <li className={props.location.pathname === "/pricing" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to={"/pricing"}>Pricing</Link>
                    </li>
                </ul>
                <span className="navbar-text">
      Here you can buy some items
    </span>
            </div>
        </nav>

    </div>
}
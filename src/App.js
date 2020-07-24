import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css'
import StorePageContainer from "./components/StorePage/StorePageContainer";
import MainHomePage from "./components/HomePage/MainHomePage";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";

function App(props) {
  return (
    <div className={"wrapper"}>
        <div className={"header"}>
            <HeaderContainer />

        </div>


        <div className={"sidebar"}>
            <NavBarContainer {...props}/>
        </div>
        <div className={"content"}>
            <Switch>
                <Route exact path={"/"} render={() => <Redirect to={"/home"} />} />
                <Route path={"/home"} component={MainHomePage} />
                <Route path={"/store"} component={StorePageContainer}/>

            </Switch>
        </div>

    </div>
  );
}

export default App;

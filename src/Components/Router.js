import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';
import HeaderContainer from "./Header/HeaderContainer";

export default () => (
    <Router>
        <>
        <HeaderContainer/>
        <Switch>
            <Route path="/" exact  component={Home} />
            <Route path="/logIn" exact  component={Auth} />
        </Switch>
        </>
    </Router>
)
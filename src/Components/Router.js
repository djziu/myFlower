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
import { Login, Register } from '../Routes/Auth';


export default () => (
    <Router>
        <>
        <HeaderContainer/>
        <Switch>
            <Route path="/" exact  component={Home} />
            <Route path="/logIn" exact  component={Auth} />
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/register" component={Register}/>
        </Switch>
        </>
    </Router>
)
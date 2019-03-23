import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Intro from "../Components/Intro";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";

export default class HomePage extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/login"
                       component={Login}/>
                <Route path="/register"
                       component={Register}/>
                <Route path="/home"
                       component={Intro}/>
            </Router>
        );
    }
}
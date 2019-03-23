import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";
import AdultProfile from "../Components/AdultProfile";
import ChildProfile from "../Components/ChildProfile";

export default class HomePage extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/login"
                       component={Login}/>
                <Route path="/register"
                       component={Register}/>
                <Route path="/profile"
                       component={AdultProfile}/>
                <Route path="/profile"
                       component={ChildProfile}/>
            </Router>
        );
    }
}
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "./Components/Login";
import Register from "./Components/Register";
import {Route} from "react-router";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/login"
                           component={Login}>
                    </Route>
                    <Route exact path="/register"
                           component={Register}>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;

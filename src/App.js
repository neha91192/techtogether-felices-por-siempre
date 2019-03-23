import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "./Components/Login";
import {Route} from "react-router";
import Register from "./Components/Register";
import Home from "./Containers/HomePage";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import NavBar from './Components/Header/NavBar';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "./Components/Login";
import {Route} from "react-router";
import Register from "./Components/Register";
import Home from "./Containers/HomePage";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          user_id: 1
      }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar user_id={this.state.user_id} is_child={false} />
                    <Route path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;

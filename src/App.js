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
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
      };
    }

    componentDidMount() {
      if (this.state.logged_in) {
        fetch('http://localhost:8000/core/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username });
          });
      }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar logged_in={this.state.logged_in} />
                    <Route path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;

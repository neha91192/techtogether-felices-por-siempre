import React, {Component} from 'react';
import NavBar from './Components/Header/NavBar';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Containers/HomePage";
import Login from "./Components/Login";
import AdultProfile from "./Components/AdultProfile";
import Register from "./Components/Register";
import ChildProfile from "./Components/ChildProfile";
import SearchResults from "./Components/SearchResults";


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
                    this.setState({username: json.username});
                });
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar logged_in={this.state.logged_in}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route  exact path="/login"
                            component={Login}/>
                    <Route  exact path="/register"
                            component={Register}/>
                    <Route  exact path="/profile"
                            component={AdultProfile}/>
                    <Route  exact path="/childProfile"
                            component={ChildProfile}/>
                    <Route exact path="/search" component={SearchResults}/>
                </div>
            </Router>
        );
    }
}

export default App;

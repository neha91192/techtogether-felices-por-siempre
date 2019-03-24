import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router";
import AdultProfile from "../Components/AdultProfile";
import img from "../resources/childlostwarzone.jpg";
import ChildProfile from "../Components/ChildProfile";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
        }
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
                <Route path="/login"
                       component={Login}/>
                <Route path="/register"
                       component={Register}/>
                <Route path="/profile"
                       component={AdultProfile}/>
                <Route path="/childProfile"
                       component={ChildProfile}/>
                {/*<div style={{*/}
                    {/*backgroundImage: 'url(' + img + ')',*/}
                    {/*backgroundSize: 'cover',*/}
                    {/*backgroundPosition: 'center center',*/}
                    {/*backgroundRepeat: 'no-repeat',*/}
                {/*}}>*/}
                    {/*{"Welcome to happily ever after!"}*/}
                {/*</div>*/}
            </Router>
        );
    }
}
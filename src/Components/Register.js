import React, {Component} from 'react';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };

        this.change_username = this.change_username.bind(this);
        this.change_password = this.change_password.bind(this);

    }

    change_username(event) {
        this.setState({username: event.target.value, password: this.state.password});
    }

    change_password(event) {
        this.setState({username: this.state.username, password: event.target.value});
    }

    handle_signup = (e, data) => {
    e.preventDefault();
        fetch('http://localhost:8000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            console.log("successful new user");
            this.setState({
              logged_in: true,
              username: json.username
            });
          });
      };


    render() {
        return (
            <div>
                <form onSubmit={e => this.handle_signup(e, this.state)} className="text-center border border-light p-5">
                    <h1>Sign Up</h1>
                    <input value={this.state.username} onChange={this.change_username}  type="text" className="form-control mb-4" placeholder="Email"/>
                    <input value={this.state.password} onChange={this.change_password} type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                           placeholder="Password"/>
                    <button className="btn btn-dark btn-block my-4" type="submit">Continue</button>
                </form>
            </div>
        );
    }
}
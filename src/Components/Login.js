import React from 'react';

export default class Login extends React.Component {
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

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            console.log('successful login')
            console.log(json)
            // TODO: Add error messages
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              username: json.user.username
            });
            this.props.history.push("/home");
          });
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handle_login(e, this.state)} className="text-center border border-light p-5">
                    <h1>Sign In</h1>
                    <input type="text" className="form-control mb-4" placeholder="Email" value={this.state.username} onChange={this.change_username}/>
                    <input value={this.state.password} onChange={this.change_password} type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                           placeholder="Password"/>
                    <button className="btn btn-dark btn-block my-4" type="submit">Continue</button>
                </form>
            </div>
        );
    }
}
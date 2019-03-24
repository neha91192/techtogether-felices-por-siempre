import React from 'react';
import { Redirect } from 'react-router-dom'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user : {
                username: '',
                password: '',
                type: ''
            },
            dropdownOpen: false,
            selected: "Please Select"
        };

        this.change_username = this.change_username.bind(this);
        this.change_password = this.change_password.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onClick(e) {
        this.setState({
            selected: e.target.id
        });
        this.setState({
            type: e.target.id
        });
    }
    change_username(event) {
        this.setState({username: event.target.value, password: this.state.password});
    }

    change_password(event) {
        this.setState({username: this.state.username, password: event.target.value});
    }

    handle_login = (e) => {
        let data = {}
        data.username = this.state.username;
        data.password = this.state.password;
        data.type = this.state.type
        e.preventDefault();
        fetch('http://localhost:4000/login', {
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
            localStorage.setItem('type', json.type);
            this.setState({
              logged_in: true,
              user: json
            });
            this.props.history.push("/");
            window.location.reload();
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
                <form onSubmit={e => this.handle_login(e)} className="text-center border border-light p-5">
                    <h1>Sign In</h1>
                    <input type="text" className="form-control mb-4" placeholder="Email" value={this.state.username} onChange={this.change_username}/>
                    <input value={this.state.password} onChange={this.change_password} type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                           placeholder="Password"/>
                    <div className="dropdown">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>{this.state.selected}</DropdownToggle>
                            <DropdownMenu onClick={this.onClick}>
                                <DropdownItem id="Child" onClick={this.onClick}>
                                    {"Child"}
                                </DropdownItem>
                                <DropdownItem id="Parent" onClick={this.onClick}>
                                    {"Parent"}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <button className="btn btn-dark btn-block my-4" type="submit">Continue</button>
                </form>
            </div>
        );
    }
}
import React from 'react';

export default class Register extends React.Component {
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

    change_username(event) {
        let user = {username: event.target.value, password: this.state.password};
        this.setState(user);
    }

    change_password(event) {
        let user = {username: this.state.username, password: event.target.value};
            this.setState(user);
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

    handle_signup = (e, data) => {
    e.preventDefault();
        fetch('http://localhost:4000/register', {
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
              this.props.history.push("/home");
          });
      };


    render() {
        return (
            <div>
                <form onSubmit={e => this.handle_signup(e, this.state.user)} className="text-center border border-light p-5">
                    <h1>Sign Up</h1>
                    <input value={this.state.username} onChange={this.change_username}  type="text" className="form-control mb-4" placeholder="Email"/>
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
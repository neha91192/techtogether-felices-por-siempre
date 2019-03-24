import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../../App.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        logged_in: this.props.logged_in
    }
    this.handle_logout = this.handle_logout.bind(this);
  }

  handle_logout() {
    localStorage.removeItem('token');
    this.setState({ logged_in: false});
  }

  render() {
    if (this.state.logged_in) {
        return (
            <div className="nav-container">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="/home" style={{"font-family": 'Anton'}}>Happily Ever After</Nav.Link>
                    <Nav.Link href="/link">Matches</Nav.Link>
                    <Nav.Link href="/link">Edit Search Profile</Nav.Link>
                    <Nav.Link href="/link">Account Settings</Nav.Link>
                    <Nav.Link onClick={this.handle_logout} href="">Log Out</Nav.Link>
                </Navbar>
            </div>
        );
    } else {
        return (
            <div className="nav-container">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="/home">Happily Ever After</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                </Navbar>
            </div>
        );
    }

  }
}

export default NavBar;
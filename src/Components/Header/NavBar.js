import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        logged_in: this.props.logged_in
    }
    console.log(this.state);
  }

  render() {
    if (this.state.logged_in) {
        return (
            <div className="nav-container">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="#home">Felices Por Siempre</Nav.Link>
                    <Nav.Link href="#link">Matches</Nav.Link>
                    <Nav.Link href="#link">Edit Search Profile</Nav.Link>
                    <Nav.Link href="#link">Account Settings</Nav.Link>
                </Navbar>
            </div>
        );
    } else {
        return (
            <Container>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="#home">Felices Por Siempre</Nav.Link>
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="register">Sign Up</Nav.Link>
                </Navbar>
            </Container>
        );
    }

  }
}

export default NavBar;
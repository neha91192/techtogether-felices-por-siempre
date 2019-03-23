import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: this.props.user_id,
        logged_in: this.props.user_id != null,
        is_child: this.props.is_child
    }
    console.log(this.state);
  }

  render() {
    if (this.state.logged_in) {
        return (
            <Container>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="#home">Felices Por Siempre</Nav.Link>
                    <Nav.Link href="#link">Matches</Nav.Link>
                    <Nav.Link href="#link">Edit Search Profile</Nav.Link>
                    <Nav.Link href="#link">Account Settings</Nav.Link>
                </Navbar>
            </Container>
        );
    } else {
        return (
            <Container>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Nav.Link href="#home">Felices Por Siempre</Nav.Link>
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#home">Sign Up</Nav.Link>
                </Navbar>
            </Container>
        );
    }

  }
}

export default NavBar;
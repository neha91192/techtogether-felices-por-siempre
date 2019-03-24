import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../../App.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        logged_in: this.props.logged_in,
        type: "Child"
    }
    this.handle_logout = this.handle_logout.bind(this);
  }

  componentWillReceiveProps(newProps) {
      console.log(localStorage.getItem("type"))
      if(localStorage.getItem("type") != null) {
          this.setState({
              type: localStorage.getItem("type")
          })
      }
  }
  componentDidMount() {
      if(localStorage.getItem("type") != null) {
          this.setState({
              type: localStorage.getItem("type")
          })
      }

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
                    <Nav.Link href="/search">Matches</Nav.Link>
                    { console.log(this.state.type)}
                    {this.state.type === "Child" && <Nav.Link href="/childProfile">Edit Search Profile</Nav.Link> }
                    {this.state.type === "Parent" && <Nav.Link href="/profile">Edit Search Profile</Nav.Link> }
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
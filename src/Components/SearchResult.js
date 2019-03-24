import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
        name: this.props.profile.firstname,
        email: this.props.profile.email,
        img: this.props.profile.img
    }
  }

  render() {
    return (
        <Card style={{ width: '15rem',  height: '20rem', backgroundColor: 'rgba(0, 0, 0, 0.03)'}}>
          <Card.Header style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', paddingLeft: '10px', paddingTop: '0px', paddingBottom: '0px'}}>{this.state.name}</Card.Header>
          <div style={{maxHeight: '65%'}}>
            <Card.Img style={{height: '100%' }} variant="top" src={this.state.img} />
          </div>
          <Card.Body style={{padding: '15px', margin:'auto'}}>
            <Button href={"mailto:" + this.state.email} variant="info">Message Contact</Button>
          </Card.Body>
        </Card>
    );
  }
}

export default SearchResult;
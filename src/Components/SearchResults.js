import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResult from './SearchResult';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      results: this.props.results
    }
  }

  render() {
    const listItems = this.state.results.map((profile) =>
      <Col style={{padding: '20px'}} md={4} sm={4} lg={3}><SearchResult  profile={profile} /></Col>
      
    );
    return (

      <Container>
        <h1 style={{paddingTop:'30px'}}>Your Matches</h1>
        <Row>
          {listItems}
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
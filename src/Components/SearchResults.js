import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResult from './SearchResult';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.getResults = this.getResults.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  componentDidMount() {
    this.getResults();
  }

    getResults() {
        if(localStorage.getItem("type") === "Child") {
            fetch('http://localhost:4000/parent', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => this.setState({results: json.hits.hits}))
        }
            if(localStorage.getItem("type") === "Parent") {
                fetch('http://localhost:4000/child', {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(json => this.setState({results: json.hits.hits}))
            }
  }


  showResults() {

      return this.state.results.map((profile) => {
              return <Col style={{padding: '20px'}} md={4} sm={4} lg={3}><SearchResult profile={profile._source.body}/></Col>
          }
      );
  }
  render() {


    return (

      <Container>
        <h1 style={{paddingTop:'30px'}}>Your Matches</h1>
        <Row>
          {this.showResults()}
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
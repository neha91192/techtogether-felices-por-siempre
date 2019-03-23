import React, { Component } from 'react';
import NavBar from './Components/Header/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: 1
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar user_id={this.state.user_id} is_child={false} />
      </div>
    );
  }
}

export default App;

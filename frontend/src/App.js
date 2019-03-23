   // frontend/src/App.js

    import React, { Component } from "react";
    import axios from "axios";

    const childItems = [
      {
        id: 1,
        name: "Tony Test",
        last_seen: "Houston",
        found: false
      },
      {
        id: 2,
        name: "Sara Test",
        last_seen: "El Paso",
        found: false
      }
    ];
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          childList: []
        };
      }
      componentDidMount() {
        this.refreshList();
      }
      refreshList = () => {
        axios
          .get("http://localhost:8000/api/child/")
          .then(res => this.setState({ childList: res.data }))
          .catch(err => console.log(err));
      };
      renderItems = () => {
        const newItems = this.state.childList;
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {item.name} - {item.last_seen}
            </span>
          </li>
        ));
      };
      render() {
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Felices por </h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
      }
    }
    export default App;
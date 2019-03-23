import React from 'react';

export default class ProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            name: '',
            age: 0,
            hometown: '',
            logged_in: localStorage.getItem('token') ? true : false
        };

        this.change_name = this.change_name.bind(this);
        this.change_age = this.change_age.bind(this);
        this.change_hometown = this.change_hometown.bind(this);

    }
    componentDidMount() {
      if (this.state.logged_in) {

        
        fetch('http://localhost:8000/core/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        }).then(res => res.json()).then(json => {
              var url = 'http://localhost:8000/profile/' + json.username;
              console.log(url);
              this.setState({
                  username: json.username,
                  name: '',
                  age: 0,
                  hometown: '',
                  logged_in: this.state.logged_in
              });
              fetch(url).then(res => res.json()).then(json => {
                    console.log(json);
                    this.setState({
                    username: this.state.username,
                    name: json[0].fields.name,
                    age: json[0].fields.age,
                    hometown: json[0].fields.hometown,
                    logged_in: this.state.logged_in
                  });
                });
          });
      }
    }


    change_name(event) {
        this.setState({username: this.state.username, name: event.target.value, age: this.state.age, hometown: this.state.hometown});
    }

    change_age(event) {
        this.setState({username: this.state.username, name: this.state.name, age: event.target.value, hometown: this.state.hometown});
    }

    change_hometown(event) {
        this.setState({username: this.state.username, name: this.state.name, age: this.state.age, hometown: event.target.value});
    }


    handle_save = (e, data) => {
      console.log('posting...')
      fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': localStorage.getItem('token')
        },
        body: JSON.stringify({name: this.state.name, age: this.state.age, hometown: this.state.hometown})
      });

    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handle_save(e, this.state)} className="text-center border border-light p-5" >
                    <h1>Your Child's Profile</h1>
                    <input type="text" className="form-control mb-4" placeholder="First Name" value={this.state.name} onChange={this.change_name}/>
                    <input value={this.state.hometown} onChange={this.change_hometown} type="text" className="form-control mb-4"
                           placeholder="Hometown"/>
                    <input value={this.state.age} onChange={this.change_age} type="number" className="form-control mb-4"
                           placeholder="Age"/>
                    <button className="btn btn-dark btn-block my-4" type="submit" >Save</button>
                </form>
            </div>
        );
    }
}
// import React from "react";
//
//
// export default class Intro extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         logged_in: localStorage.getItem('token') ? true : false,
//         username: ''
//       }
//     }
//
//     componentDidMount() {
//       if (this.state.logged_in) {
//         fetch('http://localhost:8000/core/current_user/', {
//           headers: {
//             Authorization: `JWT ${localStorage.getItem('token')}`
//           }
//         })
//           .then(res => res.json())
//           .then(json => {
//             this.setState({ username: json.username });
//           });
//       }
//     }
//     render() {
//         return (
//             <div style={{backgroundImage: "url(" + "http://files.happilyeverafter-site.webnode.com/200000000-82b8f83b6c/childlostwarzone.jpg" + ")"}}>
//
//             </div>
//         );
//     }
// }
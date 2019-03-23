import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="text-center border border-light p-5">
                    <h1>Sign In</h1>
                    <input type="text" className="form-control mb-4" placeholder="Email"/>
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                           placeholder="Password"/>
                    <button className="btn btn-dark btn-block my-4" type="button">Continue</button>
                </form>
            </div>
        );
    }
}
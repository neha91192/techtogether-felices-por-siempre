import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class ChildProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genderDropdownOpen: false,
            genderSelected: "Please Select",
            raceDropdownOpen: false,
            raceSelected: "Please Select"
        };

        this.toggleGender = this.toggleGender.bind(this);
        this.onClickGender = this.onClickGender.bind(this);
        this.toggleRace = this.toggleRace.bind(this);
        this.onClickRace = this.onClickRace.bind(this);
    }

    toggleGender() {
        this.setState(prevState => ({
            genderDropdownOpen: !prevState.genderDropdownOpen
        }));
    }

    onClickGender(e) {
        this.setState({
            genderSelected: e.target.id
        });
    }

    toggleRace() {
        this.setState(prevState => ({
            raceDropdownOpen: !prevState.raceDropdownOpen
        }));
    }

    onClickRace(e) {
        this.setState({
            raceSelected: e.target.id
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="text-info" style={{fontSize: "30px"}}>
                        {"Child Profile"}
                    </div>
                    <div style={{paddingTop: "40px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Gender</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <div className="dropdown">
                                    <Dropdown isOpen={this.state.genderDropdownOpen} toggle={this.toggleGender}>
                                        <DropdownToggle caret>{this.state.genderSelected}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickGender}>
                                            <DropdownItem id="Male" onClick={this.onClickGender}>
                                                {"Male"}
                                            </DropdownItem>
                                            <DropdownItem id="Female" onClick={this.onClickGender}>
                                                {"Female"}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Current Age</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Race/Ethnicity</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <div className="dropdown">
                                    <Dropdown isOpen={this.state.raceDropdownOpen} toggle={this.toggleRace}>
                                        <DropdownToggle caret>{this.state.raceSelected}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickRace}>
                                            <DropdownItem id="American Indian or Alaskan Native"
                                                          onClick={this.onClickRace}>
                                                {"American Indian or Alaskan Native"}
                                            </DropdownItem>
                                            <DropdownItem id="Asian" onClick={this.onClickRace}>
                                                {"Asian"}
                                            </DropdownItem>
                                            <DropdownItem id="Black or African American" onClick={this.onClickRace}>
                                                {"Black or African American"}
                                            </DropdownItem>
                                            <DropdownItem id="Hispanic or Latino" onClick={this.onClickRace}>
                                                {"Hispanic or Latino"}
                                            </DropdownItem>
                                            <DropdownItem id="White" onClick={this.onClickRace}>
                                                {"White"}
                                            </DropdownItem>
                                            <DropdownItem id="Native Hawaiian or Other Pacific Islander"
                                                          onClick={this.onClickRace}>
                                                {"Native Hawaiian or Other Pacific Islander"}
                                            </DropdownItem>
                                            <DropdownItem id="Two or More Races" onClick={this.onClickRace}>
                                                {"Two or More Races"}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
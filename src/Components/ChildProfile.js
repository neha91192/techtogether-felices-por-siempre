import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class ChildProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            middlename : '',
            lastname : '',
            age : '',
            contact : '',
            email : '',
            interesting : '',

            genderDropdownOpen: false,
            genderSelected: "Please Select",
            raceDropdownOpen: false,
            raceSelected: "Please Select",

            firstname2 : '',
            middlename2 : '',
            lastname2 : '',
            age2 : '',
            contact2 : '',
            email2 : '',
            interesting2 : '',
            genderDropdownOpen2: false,
            genderSelected2: "Please Select",
            raceDropdownOpen2: false,
            raceSelected2: "Please Select",

            firstname3 : '',
            middlename3 : '',
            lastname3 : '',
            age3 : '',
            contact3 : '',
            email3 : '',
            interesting3 : '',
            genderDropdownOpen3: false,
            genderSelected3: "Please Select",
            raceDropdownOpen3: false,
            raceSelected3: "Please Select"
        };

        this.toggleGender = this.toggleGender.bind(this);
        this.toggleGender2 = this.toggleGender2.bind(this);
        this.toggleGender3 = this.toggleGender3.bind(this);

        this.onClickGender = this.onClickGender.bind(this);
        this.toggleRace = this.toggleRace.bind(this);
        this.onClickRace = this.onClickRace.bind(this);

        this.onClickGender2 = this.onClickGender2.bind(this);
        this.toggleRace2 = this.toggleRace2.bind(this);
        this.onClickRace2 = this.onClickRace2.bind(this);

        this.onClickGender3 = this.onClickGender3.bind(this);
        this.toggleRace3 = this.toggleRace3.bind(this);
        this.onClickRace3 = this.onClickRace3.bind(this);

    }

    formChanged = (event) => {
        console.log(event.target.value);
        console.log(this.state.firstname);
        this.setState({
            firstname: event.target.value
        })
    };

    formChanged2 = (event) => {
        console.log(event.target.value);
        console.log(this.state.middlename);
        this.setState({
            middlename: event.target.value
        })
    };


    formChanged3 = (event) => {
        console.log(event.target.value);
        console.log(this.state.age);
        this.setState({
            age: event.target.value
        })
    };

    formChanged4 = (event) => {
        console.log(event.target.value);
        console.log(this.state.contact);
        this.setState({
            contact: event.target.value
        })
    };

    formChanged5 = (event) => {
        console.log(event.target.value);
        console.log(this.state.email);
        this.setState({
            email: event.target.value
        })
    };

    formChanged6 = (event) => {
        console.log(event.target.value);
        console.log(this.state.interesting);
        this.setState({
            interesting: event.target.value
        })
    };

    formChangedb = (event) => {
        console.log(event.target.value);
        console.log(this.state.firstname2);
        this.setState({
            firstname2: event.target.value
        })
    };

    formChanged2b = (event) => {
        console.log(event.target.value);
        console.log(this.state.middlename2);
        this.setState({
            middlename2: event.target.value
        })
    };


    formChanged3b = (event) => {
        console.log(event.target.value);
        console.log(this.state.age2);
        this.setState({
            age2: event.target.value
        })
    };

    formChanged4b = (event) => {
        console.log(event.target.value);
        console.log(this.state.contact2);
        this.setState({
            contact2: event.target.value
        })
    };

    formChanged5b = (event) => {
        console.log(event.target.value);
        console.log(this.state.email2);
        this.setState({
            email2: event.target.value
        })
    };

    formChanged6b = (event) => {
        console.log(event.target.value);
        console.log(this.state.interesting2);
        this.setState({
            interesting2: event.target.value
        })
    };

    formChangedc = (event) => {
        console.log(event.target.value);
        console.log(this.state.firstname3);
        this.setState({
            firstname3: event.target.value
        })
    };

    formChanged2c = (event) => {
        console.log(event.target.value);
        console.log(this.state.middlename3);
        this.setState({
            middlename3: event.target.value
        })
    };


    formChanged3c = (event) => {
        console.log(event.target.value);
        console.log(this.state.age3);
        this.setState({
            age3: event.target.value
        })
    };

    formChanged4c = (event) => {
        console.log(event.target.value);
        console.log(this.state.contact3);
        this.setState({
            contact3: event.target.value
        })
    };

    formChanged5c = (event) => {
        console.log(event.target.value);
        console.log(this.state.email3);
        this.setState({
            email3: event.target.value
        })
    };

    formChanged6c = (event) => {
        console.log(event.target.value);
        console.log(this.state.interesting3);
        this.setState({
            interesting3: event.target.value
        })
    };


    toggleGender() {
        this.setState(prevState => ({
            genderDropdownOpen: !prevState.genderDropdownOpen
        }));
    }

    toggleGender2() {
        this.setState(prevState => ({
            genderDropdownOpen2: !prevState.genderDropdownOpen2
        }));
    }

    toggleGender3() {
        this.setState(prevState => ({
            genderDropdownOpen3: !prevState.genderDropdownOpen3
        }));
    }




    saveUser = () => {
        this.state.newUser = {
            username : this.state.currentUser.username,
            password : this.state.password,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone

        }
        console.log(this.state.newUser);
        this.userService.updateUser(this.state.currentUser.id,this.state.newUser)
            .then((loginUser)=>{alert('Saved Changes')})

    };

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
x
    onClickGender2(e) {
        this.setState({
            genderSelected2: e.target.id
        });
    }

    toggleRace2() {
        this.setState(prevState => ({
            raceDropdownOpen2: !prevState.raceDropdownOpen2
        }));
    }

    onClickRace2(e) {
        this.setState({
            raceSelected2: e.target.id
        });
    }

    onClickGender3(e) {
        this.setState({
            genderSelected3: e.target.id
        });
    }

    toggleRace3() {
        this.setState(prevState => ({
            raceDropdownOpen3: !prevState.raceDropdownOpen3
        }));
    }

    onClickRace3(e) {
        this.setState({
            raceSelected3: e.target.id
        });
    }

    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="text-info" style={{fontSize: "30px"}}>
                        {"Child Profile"}
                    </div>
                    <div >
                        <label>To be registered by Children of Ages 13+ / or Guardian</label>
                    </div>
                    <div style={{paddingTop: "40px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.currentUser.lastName}
                                      onChange={this.formChanged3}/>
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
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Contact</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me interesting stuff about yourself</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <br/>



                        <div className="text-info" style={{fontSize: "30px"}}>
                            {"Father's Data"}
                        </div>
                        <br/>

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
                                    <Dropdown isOpen={this.state.genderDropdownOpen2} toggle={this.toggleGender2}>
                                        <DropdownToggle caret>{this.state.genderSelected2}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickGender2}>
                                            <DropdownItem id="Male" onClick={this.onClickGender2}>
                                                {"Male"}
                                            </DropdownItem>
                                            <DropdownItem id="Female" onClick={this.onClickGender2}>
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
                                    <Dropdown isOpen={this.state.raceDropdownOpen2} toggle={this.toggleRace2}>
                                        <DropdownToggle caret>{this.state.raceSelected2}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickRace2}>
                                            <DropdownItem id="American Indian or Alaskan Native"
                                                          onClick={this.onClickRace2}>
                                                {"American Indian or Alaskan Native"}
                                            </DropdownItem>
                                            <DropdownItem id="Asian" onClick={this.onClickRace2}>
                                                {"Asian"}
                                            </DropdownItem>
                                            <DropdownItem id="Black or African American" onClick={this.onClickRace2}>
                                                {"Black or African American"}
                                            </DropdownItem>
                                            <DropdownItem id="Hispanic or Latino" onClick={this.onClickRace2}>
                                                {"Hispanic or Latino"}
                                            </DropdownItem>
                                            <DropdownItem id="White" onClick={this.onClickRace2}>
                                                {"White"}
                                            </DropdownItem>
                                            <DropdownItem id="Native Hawaiian or Other Pacific Islander"
                                                          onClick={this.onClickRace2}>
                                                {"Native Hawaiian or Other Pacific Islander"}
                                            </DropdownItem>
                                            <DropdownItem id="Two or More Races" onClick={this.onClickRace2}>
                                                {"Two or More Races"}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Contact</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me interesting stuff about your dad</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="text-info" style={{fontSize: "30px"}}>
                            {"Mother's Data"}
                        </div>
                        <br/>

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
                                    <Dropdown isOpen={this.state.genderDropdownOpen3} toggle={this.toggleGender3}>
                                        <DropdownToggle caret>{this.state.genderSelected3}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickGender3}>
                                            <DropdownItem id="Male" onClick={this.onClickGender3}>
                                                {"Male"}
                                            </DropdownItem>
                                            <DropdownItem id="Female" onClick={this.onClickGender3}>
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
                                    <Dropdown isOpen={this.state.raceDropdownOpen3} toggle={this.toggleRace3}>
                                        <DropdownToggle caret>{this.state.raceSelected3}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickRace3}>
                                            <DropdownItem id="American Indian or Alaskan Native"
                                                          onClick={this.onClickRace3}>
                                                {"American Indian or Alaskan Native"}
                                            </DropdownItem>
                                            <DropdownItem id="Asian" onClick={this.onClickRace3}>
                                                {"Asian"}
                                            </DropdownItem>
                                            <DropdownItem id="Black or African American" onClick={this.onClickRace3}>
                                                {"Black or African American"}
                                            </DropdownItem>
                                            <DropdownItem id="Hispanic or Latino" onClick={this.onClickRace3}>
                                                {"Hispanic or Latino"}
                                            </DropdownItem>
                                            <DropdownItem id="White" onClick={this.onClickRace3}>
                                                {"White"}
                                            </DropdownItem>
                                            <DropdownItem id="Native Hawaiian or Other Pacific Islander"
                                                          onClick={this.onClickRace3}>
                                                {"Native Hawaiian or Other Pacific Islander"}
                                            </DropdownItem>
                                            <DropdownItem id="Two or More Races" onClick={this.onClickRace3}>
                                                {"Two or More Races"}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Contact</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me interesting stuff about your mother</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>

                        <button className="btn btn-dark btn-block my-4" type="submit">Save Profile</button>

                    </div>
                </div>
            </div>
        );
    }
}
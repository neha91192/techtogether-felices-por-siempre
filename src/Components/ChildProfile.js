import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import ProfileService from "../Services/ProfileService";
import defaultImg from '../resources/avatar.png'


export default class ChildProfile extends React.Component {

    constructor(props) {
        super(props);
        this.profileService = ProfileService.instance;
        this.state = {

            currentUser: '',
            newUser: '',
            profilePicture: defaultImg,
            firstname: '',
            middlename: '',
            lastname: '',
            age: '',
            contact: '',
            email: '',
            interesting: '',

            genderDropdownOpen: false,
            genderSelected: "Please Select",
            raceDropdownOpen: false,
            raceSelected: "Please Select",

            firstname2: '',
            middlename2: '',
            lastname2: '',
            age2: '',
            contact2: '',
            email2: '',
            interesting2: '',
            genderDropdownOpen2: false,
            genderSelected2: "Please Select",
            raceDropdownOpen2: false,
            raceSelected2: "Please Select",

            firstname3: '',
            middlename3: '',
            lastname3: '',
            age3: '',
            contact3: '',
            email3: '',
            interesting3: '',
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

        this.handleFileInput = this.handleFileInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            profilePicture: URL.createObjectURL(event.target.files[0])
        })
    }

    formChanged = (event) => {
        console.log(event.target.value);
        console.log(this.state.firstname);
        this.setState({
            firstname: event.target.value
        })
    };

    formChanged1 = (event) => {
        console.log(event.target.value);
        console.log(this.state.lastname);
        this.setState({
            lastname: event.target.value
        })
    };

    formChanged1b = (event) => {
        console.log(event.target.value);
        console.log(this.state.lastname2);
        this.setState({
            lastname2: event.target.value
        })
    };

    formChanged1c = (event) => {
        console.log(event.target.value);
        console.log(this.state.lastname3);
        this.setState({
            lastname3: event.target.value
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

    handleFileInput(e) {
        console.log(e.target.files)
        this.setState({profilePicture: e.target.files})
    }


    saveUser = () => {
        let parent1 = {
            firstname: this.state.firstname2,
            middlename: this.state.middlename2,
            lastname: this.state.lastname2,
            age: this.state.age2,
            contact: this.state.contact2,
            email: this.state.email2,
            interesting: this.state.interesting2,
            genderSelected: this.state.genderSelected2,
            raceSelected: this.state.raceSelected2
        }

        let parent2 = {
            firstname: this.state.firstname3,
            middlename: this.state.middlename3,
            lastname: this.state.lastname3,
            age: this.state.age3,
            contact: this.state.contact3,
            email: this.state.email3,
            interesting: this.state.interesting3,
            genderSelected: this.state.genderSelected3,
            raceSelected: this.state.raceSelected3
        }

        this.state.newUser = {
            username: this.state.currentUser.username,
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            lastname: this.state.lastname,
            profilePicture: this.state.profilePicture,
            age: this.state.age,
            contact: this.state.contact,
            email: this.state.email,
            interesting: this.state.interesting,
            genderSelected: this.state.genderSelected,
            raceSelected: this.state.raceSelected,

            parent1: parent1,
            parent2: parent2

        }
        console.log(this.state.newUser);
        this.profileService.updateChild(this.state.currentUser.id, this.state.newUser)
            .then((loginUser) => {
                alert('Saved Changes')
            })

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
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="text-info" style={{fontSize: "30px"}}>
                        {"Search Profile"}
                    </div>
                    <div>
                        <label>To be registered by Children of Ages 13+ / or Guardian</label>
                    </div>
                    <div className="row">
                        <img src={this.state.profilePicture}
                             width="200px" height="200px"/>
                        {console.log(this.state.profilePicture)}
                    </div>
                    <div className="row">
                        <input type="file" onChange={this.handleChange}/>
                    </div>
                    <div style={{paddingTop: "40px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.firstname}
                                       onChange={this.formChanged}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.middlename}
                                       onChange={this.formChanged2}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.lastname}
                                       onChange={this.formChanged1}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.age}
                                       onChange={this.formChanged3}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.contact}
                                       onChange={this.formChanged4}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.email}
                                       onChange={this.formChanged5}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell us something unique about yourself</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.interesting}
                                       onChange={this.formChanged6}/>
                            </div>
                        </div>

                        <br/>
                        <br/>


                        <div className="text-info" style={{fontSize: "30px"}}>
                            {"Tell us something about your parents"}
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fatherfirstname}
                                       onChange={this.formChangedb}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fathermiddlename}
                                       onChange={this.formChanged2b}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fatherlastname}
                                       onChange={this.formChanged1b}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fatherage}
                                       onChange={this.formChanged3b}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fathercontact}
                                       onChange={this.formChanged4b}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fatheremail}
                                       onChange={this.formChanged5b}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me something you remember of your parent</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.fatherinteresting}
                                       onChange={this.formChanged6b}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.motherfirstname}
                                       onChange={this.formChangedc}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.mothermiddlename}
                                       onChange={this.formChanged2c}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.motherlastname}
                                       onChange={this.formChanged1c}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.motherage}
                                       onChange={this.formChanged3c}/>
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
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.mothercontact}
                                       onChange={this.formChanged4c}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.motheremail}
                                       onChange={this.formChanged5c}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me something you remember of your parent</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"
                                       value={this.state.currentUser.motherinteresting}
                                       onChange={this.formChanged6c}/>
                            </div>
                        </div>

                        <button className="btn btn-dark btn-block my-4" type="button" onClick={this.saveUser}>Save
                            Profile
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}
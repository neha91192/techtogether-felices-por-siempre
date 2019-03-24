import React from "react";
import {FormGroup, Label, Input} from "reactstrap"
import RelationshipDropdown from "./RelationshipDropdown";
import RaceDropdown from "./RaceDropdown";
import GenderDropdown from "./GenderDropdown";
import DatePicker from "react-datepicker";
import RelationshipStatusDropdown from "./RelationshipStatusDropdown";
import HaircolorDropdown from "./HaircolorDropdown";
import HairTextureDropdown from "./HairTextureDropdown";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import EyeColorDropdown from "./EyeColorDropdown";
import SkinColorDropdown from "./SkinColorDropdown";
import ProfileService from "../Services/ProfileService";


export default class AdultProfile extends React.Component {

    constructor(props) {
        super(props);
        this.profileService = ProfileService.instance;
        this.state = {

            currentUser : '',
            newUser : '',
            firstname : '',
            middlename : '',
            lastname : '',
            age : '',
            contact : '',
            email : '',
            interesting : '',



            relation : '',

            childfirstname : '',
            childmiddlename : '',
            childlastname : '',
            childage : '',
            childinteresting : '',

            relationshipDropdownOpen: false,
            relationshipSelected: "Please Select",

            raceDropdownOpen: false,
            raceSelected: "Please Select",

            raceDropdownOpenParent: false,
            raceSelectedParent: "Please Select",

            dropdownOpen: false,
            childGender: "Please Select",

            dropdownOpenRaceParent: false,
            selectedParentRace: "Please Select",

            dropdownOpenRelation: false,
            selectedStatus: "Please Select"
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleRace = this.toggleRace.bind(this);
        this.onClickRace = this.onClickRace.bind(this);
        this.toggleRelationship = this.toggleRelationship.bind(this);
        this.onClickRelationship = this.onClickRelationship.bind(this);
        this.toggleGender = this.toggleGender.bind(this);
        this.onClickGender = this.onClickGender.bind(this);

        this.toggleParentRace = this.toggleParentRace.bind(this);
        this.onClickParentRace = this.onClickParentRace.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.onClickStatus = this.onClickStatus.bind(this);
    }

    toggleStatus() {
        this.setState(prevState => ({
            dropdownOpenRelation: !prevState.dropdownOpenRelation
        }));
    }

    onClickStatus(e) {
        this.setState({
            selectedStatus: e.target.id
        });
    }

    toggleParentRace() {
        this.setState(prevState => ({
            dropdownOpenRaceParent: !prevState.dropdownOpenRaceParent
        }));
    }

    onClickParentRace(e) {
        this.setState({

            selectedParentRace: e.target.id
        });
    }

    toggleGender() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onClickGender(e) {
        this.setState({
            childGender: e.target.id
        });
    }


    toggleRelationship() {
        this.setState(prevState => ({
            relationshipDropdownOpen: !prevState.relationshipDropdownOpen
        }));
    }

    onClickRelationship(e) {
        this.setState({
            relationshipSelected: e.target.id
        });
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
        console.log(this.state.childfirstname);
        this.setState({
            childfirstname: event.target.value
        })
    };

    formChanged1b = (event) => {
        console.log(event.target.value);
        console.log(this.state.childlastname);
        this.setState({
            childlastname: event.target.value
        })
    };

    formChanged2b = (event) => {
        console.log(event.target.value);
        console.log(this.state.childmiddlename);
        this.setState({
            childmiddlename: event.target.value
        })
    };

    formChanged3b = (event) => {
        console.log(event.target.value);
        console.log(this.state.childage);
        this.setState({
            childage: event.target.value
        })
    };

    formChanged6b = (event) => {
        console.log(event.target.value);
        console.log(this.state.childinteresting);
        this.setState({
            childinteresting: event.target.value
        })
    };

    handleChange(date) {
        this.setState({
            startDate: date
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


    saveUser = () => {

        let child = {
            firstname : this.state.childfirstname,
            middlename : this.state.childmiddlename,
            lastname : this.state.childlastname,
            age : this.state.childage,

            interesting : this.state.childinteresting,
            genderSelected: this.state.childGender,
            raceSelected: this.state.raceSelected
        }

        this.state.newUser = {
            username : this.state.currentUser.username,
            firstname : this.state.firstname,
            middlename : this.state.middlename,
            lastname : this.state.lastname,
            age : this.state.age,
            contact : this.state.contact,
            email : this.state.email,
            interesting : this.state.interesting,

            raceSelected: this.state.selectedParentRace,
            relation : this.state.relationshipSelected,
            status : this.state.selectedStatus,

            child: child

        }
        console.log(this.state.newUser);
        this.profileService.updateChild(this.state.currentUser.id,this.state.newUser)
            .then((loginUser)=>{alert('Saved Changes')})

    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="text-info" style={{fontSize: "30px"}}>
                        {"Parent Profile"}
                    </div>
                    <div style={{paddingTop: "40px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"value= {this.state.currentUser.firstname}
                                       onChange={this.formChanged}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.currentUser.middlename}
                                       onChange={this.formChanged2}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.currentUser.lastname}
                                       onChange={this.formChanged1}/>
                            </div>
                        </div>
                        {/*<div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Nick name used by child</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>*/}



                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Relationship to child </label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <div className="dropdown">
                                    <Dropdown isOpen={this.state.relationshipDropdownOpen} toggle={this.toggleRelationship}>
                                        <DropdownToggle caret>{this.state.relationshipSelected}</DropdownToggle>
                                        <DropdownMenu onClick={this.onClickRelationship}>
                                            <DropdownItem id="Mother" onClick={this.onClickRelationship}>
                                                {"Mother"}
                                            </DropdownItem>
                                            <DropdownItem id="Father" onClick={this.onClickRelationship}>
                                                {"Father"}
                                            </DropdownItem>
                                            <DropdownItem id="Brother" onClick={this.onClickRelationship}>
                                                {"Brother"}
                                            </DropdownItem>
                                            <DropdownItem id="Sister" onClick={this.onClickRelationship}>
                                                {"Sister"}
                                            </DropdownItem>
                                            <DropdownItem id="Uncle" onClick={this.onClickRelationship}>
                                                {"Uncle"}
                                            </DropdownItem>
                                            <DropdownItem id="Aunt" onClick={this.onClickRelationship}>
                                                {"Aunt"}
                                            </DropdownItem>
                                            <DropdownItem id="Cousin" onClick={this.onClickRelationship}>
                                                {"Cousin"}
                                            </DropdownItem>
                                            <DropdownItem id="Grandmother" onClick={this.onClickRelationship}>
                                                {"Grandmother"}
                                            </DropdownItem>
                                            <DropdownItem id="Grandfather" onClick={this.onClickRelationship}>
                                                {"Grandfather"}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <br/>



                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Gender Of Child</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleGender}>
                                    <DropdownToggle caret>{this.state.childGender}</DropdownToggle>
                                    <DropdownMenu onClick={this.onClick}>
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
                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Race/Ethnicity</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <Dropdown isOpen={this.state.dropdownOpenRaceParent} toggle={this.toggleParentRace}>
                                    <DropdownToggle caret>{this.state.selectedParentRace}</DropdownToggle>
                                    <DropdownMenu onClick={this.onClickParentRace}>
                                        <DropdownItem id="American Indian or Alaskan Native"
                                                      onClick={this.onClickParentRace}>
                                            {"American Indian or Alaskan Native"}
                                        </DropdownItem>
                                        <DropdownItem id="Asian" onClick={this.onClickParentRace}>
                                            {"Asian"}
                                        </DropdownItem>
                                        <DropdownItem id="Black or African American" onClick={this.onClickParentRace}>
                                            {"Black or African American"}
                                        </DropdownItem>
                                        <DropdownItem id="Hispanic or Latino" onClick={this.onClickParentRace}>
                                            {"Hispanic or Latino"}
                                        </DropdownItem>
                                        <DropdownItem id="White" onClick={this.onClickParentRace}>
                                            {"White"}
                                        </DropdownItem>
                                        <DropdownItem id="Native Hawaiian or Other Pacific Islander"
                                                      onClick={this.onClickParentRace}>
                                            {"Native Hawaiian or Other Pacific Islander"}
                                        </DropdownItem>
                                        <DropdownItem id="Two or More Races" onClick={this.onClickParentRace}>
                                            {"Two or More Races"}
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Relationship Status</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <Dropdown isOpen={this.state.dropdownOpenRelation} toggle={this.toggleStatus}>
                                    <DropdownToggle caret>{this.state.selectedStatus}</DropdownToggle>
                                    <DropdownMenu onClick={this.onClickStatus}>
                                        <DropdownItem id="Married"
                                                      onClick={this.onClickStatus}>
                                            {"Married"}
                                        </DropdownItem>
                                        <DropdownItem id="Divorced" onClick={this.onClickStatus}>
                                            {"Divorced"}
                                        </DropdownItem>
                                        <DropdownItem id="Widowed" onClick={this.onClickStatus}>
                                            {"Widowed"}
                                        </DropdownItem>
                                        <DropdownItem id="Single" onClick={this.onClickStatus}>
                                            {"Single"}
                                        </DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Contact</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.currentUser.contact}
                                       onChange={this.formChanged4}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Current Age</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.currentUser.age}
                                       onChange={this.formChanged3}/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Email</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.currentUser.email}
                                       onChange={this.formChanged5}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me interesting stuff about yourself which your child knows</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.currentUser.interesting}
                                       onChange={this.formChanged6}/>
                            </div>
                        </div>

                        <br/>
                        {/*<hr/>
                        <div className="text-info" style={{fontSize: "20px"}}>
                            {"At the time when child first saw you"}
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Hair Color</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <HaircolorDropdown/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Hair Texture</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <HairTextureDropdown/>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Eye Color</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <EyeColorDropdown/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Skin Color</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <SkinColorDropdown/>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Eye Color</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <EyeColorDropdown/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Skin Color</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <SkinColorDropdown/>
                            </div>
                        </div>*/}

                        <hr/>
                        <br/>


                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.childfirstname}
                                       onChange={this.formChangedb}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Middle Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.childmiddlename}
                                       onChange={this.formChanged2b}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.childlastname}
                                       onChange={this.formChanged1b}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Age</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"  value= {this.state.childage}
                                       onChange={this.formChanged3b}/>
                            </div>
                        </div>




                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Tell me interesting stuff about your Child</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4" value= {this.state.childinteresting}
                                       onChange={this.formChanged6b}/>
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

                        <button className="btn btn-dark btn-block my-4" type="button" onClick={this.saveUser}>Save Profile</button>



                    </div>
                </div>
            </div>
        );
    }
}
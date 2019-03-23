import React from "react";
import {FormGroup, Label, Input} from "reactstrap"
import RelationshipDropdown from "./RelationshipDropdown";
import RaceDropdown from "./RaceDropdown";
import GenderDropdown from "./GenderDropdown";
import DatePicker from "react-datepicker";
import RelationshipStatusDropdown from "./RelationshipStatusDropdown";
import HaircolorDropdown from "./HaircolorDropdown";
import HairTextureDropdown from "./HairTextureDropdown";
import EyeColorDropdown from "./EyeColorDropdown";
import SkinColorDropdown from "./SkinColorDropdown";

export default class AdultProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


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
                                <label htmlFor="name">Nick name used by child</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <input id="name" type="text" className="form-control mb-4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Relationship to child</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <RelationshipDropdown/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Gender</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <GenderDropdown/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Race/Ethnicity</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <RaceDropdown/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-2">
                                <label htmlFor="name">Relationship Status</label>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-8">
                                <RelationshipStatusDropdown/>
                            </div>
                        </div>

                        <br/>
                        <hr/>
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
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
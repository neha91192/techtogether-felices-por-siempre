import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class RaceDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            selected: "Please Select"
        };
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onClick(e) {
        this.setState({
            selected: e.target.id
        });
    }
    render(){
        return(<div className="dropdown">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>{this.state.selected}</DropdownToggle>
                <DropdownMenu onClick={this.onClick}>
                    <DropdownItem id="American Indian or Alaskan Native"
                                  onClick={this.onClick}>
                        {"American Indian or Alaskan Native"}
                    </DropdownItem>
                    <DropdownItem id="Asian" onClick={this.onClick}>
                        {"Asian"}
                    </DropdownItem>
                    <DropdownItem id="Black or African American" onClick={this.onClick}>
                        {"Black or African American"}
                    </DropdownItem>
                    <DropdownItem id="Hispanic or Latino" onClick={this.onClick}>
                        {"Hispanic or Latino"}
                    </DropdownItem>
                    <DropdownItem id="White" onClick={this.onClick}>
                        {"White"}
                    </DropdownItem>
                    <DropdownItem id="Native Hawaiian or Other Pacific Islander"
                                  onClick={this.onClick}>
                        {"Native Hawaiian or Other Pacific Islander"}
                    </DropdownItem>
                    <DropdownItem id="Two or More Races" onClick={this.onClick}>
                        {"Two or More Races"}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
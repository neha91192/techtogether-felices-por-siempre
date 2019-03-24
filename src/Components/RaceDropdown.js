import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class RaceDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpenRaceParent: false,
            selectedParentRace: "Please Select"
        };
        this.toggleParentRace = this.toggleParentRace.bind(this);
        this.onClickParentRace = this.onClickParentRace.bind(this);
    }
    toggleParentRace() {
        this.setState(prevState => ({
            dropdownOpenRaceParent: !prevState.dropdownOpen
        }));
    }

    onClickParentRace(e) {
        this.setState({
            selectedParentRace: e.target.id
        });
    }
    render(){
        return(<div className="dropdown">
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
        </div>)
    }
}
import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class GenderDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            childGender: "Please Select"
        };
        this.toggleGender = this.toggleGender.bind(this);
        this.onClickGender = this.onClickGender.bind(this);
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

    render() {
        return (<div className="dropdown">
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
        </div>)
    }
}
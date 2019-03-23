import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class GenderDropdown extends React.Component {
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

    render() {
        return (<div className="dropdown">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>{this.state.selected}</DropdownToggle>
                <DropdownMenu onClick={this.onClick}>
                    <DropdownItem id="Male" onClick={this.onClick}>
                        {"Male"}
                    </DropdownItem>
                    <DropdownItem id="Female" onClick={this.onClick}>
                        {"Female"}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
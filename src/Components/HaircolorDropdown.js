import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class HaircolorDropdown extends React.Component {
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
                    <DropdownItem id="Brown" onClick={this.onClick}>
                        {"Brown"}
                    </DropdownItem>
                    <DropdownItem id="Black" onClick={this.onClick}>
                        {"Black"}
                    </DropdownItem>
                    <DropdownItem id="Red" onClick={this.onClick}>
                        {"Red"}
                    </DropdownItem>
                    <DropdownItem id="Blonde" onClick={this.onClick}>
                        {"Blonde"}
                    </DropdownItem>
                    <DropdownItem id="Other" onClick={this.onClick}>
                        {"Other"}
                    </DropdownItem>
                    <DropdownItem id="Bald" onClick={this.onClick}>
                        {"Bald"}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class HairTextureDropdown extends React.Component {
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
                    <DropdownItem id="Straight" onClick={this.onClick}>
                        {"Straight"}
                    </DropdownItem>
                    <DropdownItem id="Curly" onClick={this.onClick}>
                        {"Curly"}
                    </DropdownItem>
                    <DropdownItem id="Wavy" onClick={this.onClick}>
                        {"Wavy"}
                    </DropdownItem>
                    <DropdownItem id="Bald" onClick={this.onClick}>
                        {"Bald"}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
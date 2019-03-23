import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class RelationshipStatusDropdown extends React.Component {
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
                    <DropdownItem id="Married"
                                  onClick={this.onClick}>
                        {"Married"}
                    </DropdownItem>
                    <DropdownItem id="Divorced" onClick={this.onClick}>
                        {"Divorced"}
                    </DropdownItem>
                    <DropdownItem id="Widowed" onClick={this.onClick}>
                        {"Widowed"}
                    </DropdownItem>
                    <DropdownItem id="Single" onClick={this.onClick}>
                        {"Single"}
                    </DropdownItem>

                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
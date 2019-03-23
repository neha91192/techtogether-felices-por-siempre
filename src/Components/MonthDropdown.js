import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class MonthDropdown extends React.Component {
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
                    <DropdownItem id="January" onClick={this.onClick}>
                        {"January"}
                    </DropdownItem>
                    <DropdownItem id="February" onClick={this.onClick}>
                        {"February"}
                    </DropdownItem>
                    <DropdownItem id="March" onClick={this.onClick}>
                        {"March"}
                    </DropdownItem>
                    <DropdownItem id="April" onClick={this.onClick}>
                        {"April"}
                    </DropdownItem>
                    <DropdownItem id="May" onClick={this.onClick}>
                        {"May"}
                    </DropdownItem>
                    <DropdownItem id="June" onClick={this.onClick}>
                        {"June"}
                    </DropdownItem>
                    <DropdownItem id="July" onClick={this.onClick}>
                        {"July"}
                    </DropdownItem>
                    <DropdownItem id="August" onClick={this.onClick}>
                        {"August"}
                    </DropdownItem>
                    <DropdownItem id="September" onClick={this.onClick}>
                        {"September"}
                    </DropdownItem>
                    <DropdownItem id="October" onClick={this.onClick}>
                        {"October"}
                    </DropdownItem>
                    <DropdownItem id="November" onClick={this.onClick}>
                        {"November"}
                    </DropdownItem>
                    <DropdownItem id="December" onClick={this.onClick}>
                        {"December"}
                    </DropdownItem>

                </DropdownMenu>
            </Dropdown>
        </div>)
    }
}
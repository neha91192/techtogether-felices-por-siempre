import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class RelationshipStatusDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpenRelation: false,
            selectedStatus: "Please Select"
        };
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
    render(){
        return(<div className="dropdown">
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
        </div>)
    }
}
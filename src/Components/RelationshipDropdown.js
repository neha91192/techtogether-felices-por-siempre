import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

export default class RelationshipDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            relationshipDropdownOpen: false,
            relationshipSelected: "Please Select"
        };
        this.toggleRelationship = this.toggleRelationship.bind(this);
        this.onClickRelationship = this.onClickRelationship.bind(this);
    }
    toggleRelationship() {
        this.setState(prevState => ({
            relationshipDropdownOpen: !prevState.relationshipDropdownOpen
        }));
    }

    onClickRelationship(e) {
        this.setState({
            relationshipSelected: e.target.id
        });
    }
    render() {
        return (
            <div>
                <div className="dropdown">
                    <Dropdown isOpen={this.state.relationshipDropdownOpen} toggle={this.toggleRelationship}>
                        <DropdownToggle caret>{this.state.relationshipSelected}</DropdownToggle>
                        <DropdownMenu onClick={this.onClickRelationship}>
                            <DropdownItem id="Mother" onClick={this.onClickRelationship}>
                                {"Mother"}
                            </DropdownItem>
                            <DropdownItem id="Father" onClick={this.onClickRelationship}>
                                {"Father"}
                            </DropdownItem>
                            <DropdownItem id="Brother" onClick={this.onClickRelationship}>
                                {"Brother"}
                            </DropdownItem>
                            <DropdownItem id="Sister" onClick={this.onClickRelationship}>
                                {"Sister"}
                            </DropdownItem>
                            <DropdownItem id="Uncle" onClick={this.onClickRelationship}>
                                {"Uncle"}
                            </DropdownItem>
                            <DropdownItem id="Aunt" onClick={this.onClickRelationship}>
                                {"Aunt"}
                            </DropdownItem>
                            <DropdownItem id="Cousin" onClick={this.onClickRelationship}>
                                {"Cousin"}
                            </DropdownItem>
                            <DropdownItem id="Grandmother" onClick={this.onClickRelationship}>
                                {"Grandmother"}
                            </DropdownItem>
                            <DropdownItem id="Grandfather" onClick={this.onClickRelationship}>
                                {"Grandfather"}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
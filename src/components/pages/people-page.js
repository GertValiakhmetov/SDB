import React, {Component} from "react";
import {PersonDetailsList, PersonList} from "../sw-components";
import Row from "../row-components/row-component";

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state

        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                 right={<PersonDetailsList itemId={selectedItem}/>}
            />
        )
    }
}
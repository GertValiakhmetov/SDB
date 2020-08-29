import React, {Component} from "react";
import {StarshipDetailsList, StarshipList} from "../sw-components";
import Row from "../row-components/row-component";


export default class StarshipsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state

        return (
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                 right={<StarshipDetailsList itemId={selectedItem}/>}
            />
        )
    }
}
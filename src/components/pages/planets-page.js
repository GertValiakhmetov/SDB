import React, {Component} from "react";
import {PlanetDetailsList, PlanetList} from "../sw-components";
import Row from "../row-components/row-component";


export default class PlanetsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state

        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                 right={<PlanetDetailsList itemId={selectedItem}/>}
            />
        )
    }
}
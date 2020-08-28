import React, {Component} from "react";

import './people-list.css'
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import Row from "../row-components/row-component";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";


export default class PeopleList extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
    }


    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}
import React, {Component} from "react";

import Header from "../header/header";
import ErrorMessage from "../error-message/error-message";
import './app.css'
import SwapiService from "../../services/swapi-services";
import  {Record} from "../item-details";

import {
    PersonDetailsList,
    PersonList,
    PlanetDetailsList,
    PlanetList,
    StarshipDetailsList,
    StarshipList
} from "../sw-components";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()')
        this.setState({hasError: true})
    }

    render() {

        if (this.state.hasError) {
            return <ErrorMessage/>
        }

        return (

            <div>
                <Header/>

                <PersonDetailsList itemId={13}>
                    <Record field="gender" label="Gender"/>
                    <Record field="eyeColor" label="Eye Color"/>
                </PersonDetailsList>

                <PlanetDetailsList itemId={13}>
                    <Record field="population" label="Population"/>
                    <Record field="rotationPeriod" label="Rotation Period"/>
                    <Record field="diameter" label="Diameter"/>
                </PlanetDetailsList>

                <StarshipDetailsList itemId={13}>
                    <Record field="model" label="Model"/>
                    <Record field="length" label="Length"/>
                    <Record field="costInCredits" label="Cost"/>
                </StarshipDetailsList>

                <PersonList>
                    {({name}) => <span>{name}</span>}
                </PersonList>

                <StarshipList>
                    {({name}) => <span>{name}</span>}
                </StarshipList>

                <PlanetList>
                    {({name}) => <span>{name}</span>}
                </PlanetList>
            </div>
        )
    }
}

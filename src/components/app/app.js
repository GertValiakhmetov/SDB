import React, {Component} from "react";

import Header from "../header/header";
import ErrorMessage from "../error-message/error-message";
import './app.css'
import SwapiService from "../../services/swapi-services";

import {SwapiServiceProvider} from "../swapi-service-context";


import {
    PersonDetailsList,
    PersonList,
    PlanetDetailsList,
    PlanetList,
    StarshipDetailsList,
    StarshipList
} from "../sw-components";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

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
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div>
                        <Header/>

                        <PersonDetailsList itemId={13}/>
                        <PlanetDetailsList itemId={13}/>
                        <StarshipDetailsList itemId={13}/>

                        <PersonList/>
                        <StarshipList/>
                        <PlanetList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}

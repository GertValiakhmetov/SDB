import React, {Component} from "react";

import Header from "../header/header";
import ErrorMessage from "../error-message/error-message";
import './app.css'
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import RandomPlanet from "../random-planet";

import {PeoplePage} from "../pages";
import {PlanetsPage} from "../pages/";
import {StarshipsPage} from "../pages/";



export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(
            ({swapiService}) => {
                const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
                console.log('Suck my dick');
                return {
                    swapiService: new Service()
                };
            }
        );
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {

        if (this.state.hasError) {
            return <ErrorMessage/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}

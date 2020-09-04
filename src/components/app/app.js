import React, {Component} from "react";

import Header from "../header/header";
import ErrorMessage from "../error-message/error-message";
import './app.css'
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../sw-components/starship-details";
import {
    PeoplePage,
    StarshipsPage,
    PlanetsPage,
    LoginPage,
    SecretPage
} from "../pages";


import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };


    onLogin = () => {
        this.setState({
            isLoggedIn:true
        })
    }

    onServiceChange = () => {
        this.setState(
            ({swapiService}) => {
                const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
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

        const {isLoggedIn} = this.state;

        if (this.state.hasError) {
            return <ErrorMessage/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div>
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to StarDB</h2>}
                                       exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetsPage}/>
                                <Route path="/starships" exact component={StarshipsPage}/>
                                <Route path="/starships/:id"
                                       render={({match}) => {
                                           const {id} = match.params;
                                           return <StarshipDetails itemId={id}/>
                                       }}/>
                                <Route
                                    path="/login"
                                    render={() => {
                                        return <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                    }}/>
                                <Route
                                    path="/secret"
                                    render={() => {
                                        return <SecretPage isLoggedIn={isLoggedIn}/>
                                    }}/>
                                <Route render={() => <h1>Page not found</h1>}/>
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}

import React, {Component} from "react";

import SwapiService from "../../services/swapi-services";
import './random-planet.css'
import ErrorMessage from "../error-message/error-message";

import Spinner from "../spinner/spinner";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 8100)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    }

    onError = (err) => {
        this.setState({loading: false, error: true})
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }


    render() {
        const {loading, planet, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='random-planet jumbotron rounded'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}


const PlanetView = ({planet}) => {
    const {population, rotationPeriod, diameter, name, id} = planet;

    return (
        <React.Fragment>
            <img className='planet-image'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={''}
            />
            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
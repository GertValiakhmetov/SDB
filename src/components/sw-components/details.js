import React from "react";

import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import {WithItemDetails} from "../hoc-helper";
import {Record} from "../item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetsImage,
    getStarshipImage,
} = swapiService

const withChildRecords = (Wrapper, wrapped) => {
    return (props) => {
        return (
            <Wrapper {...props} >
                {wrapped}
            </Wrapper>
        )
    }
}

const recordPerson = [
    <Record field="gender" label="Gender"/>,
    <Record field="eyeColor" label="Eye Color"/>
]
const recordPlanet = [
    <Record field="population" label="Population"/>,
    <Record field="rotationPeriod" label="Rotation Period"/>,
    <Record field="diameter" label="Diameter"/>
];
const recordStarships = [
    <Record field="model" label="Model"/>,
    <Record field="length" label="Length"/>,
    <Record field="costInCredits" label="Cost"/>
];


const PersonDetailsList =  WithItemDetails(withChildRecords(ItemDetails, recordPerson), getPerson, getPersonImage);
const PlanetDetailsList = WithItemDetails(withChildRecords(ItemDetails, recordPlanet), getPlanet, getPlanetsImage);
const StarshipDetailsList = WithItemDetails(withChildRecords(ItemDetails, recordStarships), getStarship, getStarshipImage)

export {
    PersonDetailsList,
    PlanetDetailsList,
    StarshipDetailsList
}
import React from "react";

import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import {WithItemDetails} from "../hoc-helper";

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetsImage,
    getStarshipImage,
} = swapiService


const PersonDetailsList = WithItemDetails(ItemDetails, getPerson, getPersonImage);
const PlanetDetailsList = WithItemDetails(ItemDetails, getPlanet,getPlanetsImage);
const StarshipDetailsList = WithItemDetails(ItemDetails, getStarship, getStarshipImage)

export {
    PersonDetailsList,
    PlanetDetailsList,
    StarshipDetailsList
}
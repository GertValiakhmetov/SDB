import React from "react";
import {withRouter} from 'react-router-dom'
import {PersonDetailsList, PersonList} from "../sw-components";
import Row from "../row-components/row-component";

const PeoplePage = ({history, match}) =>  {

        const {id} = match.params;

        return (
            <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>}
                 right={<PersonDetailsList itemId={id}/>}
            />
        )
}

export default withRouter(PeoplePage);
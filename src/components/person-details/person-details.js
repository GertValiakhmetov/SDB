import React, {Component} from "react";
import './person-details.css'
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends Component {

    swapiservice = new SwapiService();

    state = {
        person: null,
        loading: true,
    };

    componentDidMount() {
        console.log(4);
        this.updatePerson();
    }

    componentDidUpdate(prevProps,prevState) {
        console.log(1)
        if(this.props.personId !== prevProps.personId) {
            console.log(5)
            this.updatePerson()
        }
        if(this.state.loading === prevState.loading) {
            this.setState({loading: !this.state.loading});
            console.log(6);
        }
    }

    updatePerson = () => {
        console.log(3)
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapiservice.getPerson(personId)
            .then((person) => {
                this.setState({person,});
            })
    }

    render() {
        console.log(2)
        const {loading} = this.state

        if(loading) return <Spinner/>

        if(!this.state.person) {
            return <span>Please select a person from a list</span>;
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person;

        return (
            <div className='person-details card'>
                <img className='person-image'
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt='character'/>

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}



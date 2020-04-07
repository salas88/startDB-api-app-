import React, { Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };


    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet,
            loading: false });
    };


    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded);
    }

    render() {

        const { planet, loading } = this.state;
        const spinner = loading ? <Spiner /> : null;
        const context = !loading ?  <PlanetView planet={planet} /> : null;

        return (
            
            <div className="random-planet jumbotron rounded">
              {spinner}
              {context}
            </div>
        )
    }
}


const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>

            <div>
                <img className="planet-images"
                    src= {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
              
                <h4> { name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span> {population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span> {rotationPeriod} </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span> {diameter} </span>
                    </li>
                </ul>
            </div>
            
        </React.Fragment>
    )
}
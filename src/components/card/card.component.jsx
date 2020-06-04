import React from 'react';
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`${ props.country.countryInfo.flag}`}></img>
            <h2> { props.country.country } </h2>
                <p> Confirmed Cases: { props.country.cases } </p>
                <p> Recovered Cases: { props.country.recovered } </p>
                <p> Critical Cases: { props.country.critical } </p>
                <p> Deaths Cases: { props.country.deaths } </p>
                <p> Active Cases: { props.country.active } </p>
    </div>
)
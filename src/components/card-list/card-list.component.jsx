import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component';

export const CardList = props => {
return <div className="card-list">
  {      
        props.countries.filter((country, index) => (
          country.countryInfo._id != null) && index < 10 
          ) //Filter countries with Null Ids
        .map(country => ( 
       <Card key={country.countryInfo._id} country={country} />
  ))}
  </div>;
};
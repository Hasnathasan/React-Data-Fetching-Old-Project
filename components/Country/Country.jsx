import React from 'react';
import "./Country.css"
const Country = (props) => {
    const {name, area, population, flags} = props.country;
    return (
        <div className="count">
            <img src={flags.png} alt="" />
            <h2>Namuya : {name.common}</h2>
            <h4>Area : {area}</h4>
            <h4>Population : {population}</h4>
        </div>
    );
};

export default Country;
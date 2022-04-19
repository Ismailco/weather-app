import React from 'react';
import PropTypes from 'prop-types';
import './City.css';

function City({ city }) {
  return (
    <div className="city">
      <div className="city-img">
        <img className="city-state" src="https://www.metaweather.com/static/img/weather/s.svg" alt={city.title} />
      </div>
      <h2 className="city-name">{city.title}</h2>
      <p className="city-type">{city.type}</p>
      <p className="gps-cord">
        GPS:
        {city.latt_long}
      </p>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    woeid: PropTypes.number.isRequired,
    latt_long: PropTypes.string.isRequired,
  }).isRequired,
};

export default City;

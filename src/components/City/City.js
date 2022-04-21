import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './City.css';

function City({ city, weather }) {
  return (
    <Link to={`/city/${city.woeid}/${city.title}`} className="city">
      <div className="city-weather-info">
        <img key={city.woeid} className="city-state" src={`https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg`} alt={city.title} />
        <div className="city-state-info">
          <p className="city-the-temp">
            {Math.round(weather[0].the_temp)}
            &deg;
          </p>
          <p className="sep" />
          <p>{weather[0].weather_state_name}</p>
        </div>
      </div>
      <div className="city-about-info">
        <h2 className="city-name">{city.title}</h2>
        <p className="city-type">{`${city.location_type}, ${city.parent.title}`}</p>
        <p className="gps-cord">
          GPS:
          {city.latt_long}
        </p>
      </div>
    </Link>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location_type: PropTypes.string.isRequired,
    woeid: PropTypes.number.isRequired,
    latt_long: PropTypes.string.isRequired,
    parent: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  weather: PropTypes.shape({
    weather_state_abbr: PropTypes.string.isRequired,
  }).isRequired,
};

export default City;

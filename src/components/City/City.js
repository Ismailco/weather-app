import React from 'react';
import PropTypes from 'prop-types';
import './City.css';

function City({ city }) {
  return (
    <div>
      <p>{city.title}</p>
      <p>{city.type}</p>
      <p>{city.woeid}</p>
      <p>{city.latt_long}</p>
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

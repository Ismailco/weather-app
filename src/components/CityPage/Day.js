import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Day({ day }) {
  return (
    <div className="c-day-forecast">
      <p className="c-day">{moment(day.applicable_date).format('dddd')}</p>
      <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt="weather-status" width="30px" />
      <div className="c-temp-state">
        <div className="c-temp-l">
          <p>
            {Math.floor(day.min_temp)}
            &deg;
          </p>
        </div>
        <div className="c-temp-h">
          <p>
            {Math.floor(day.max_temp)}
            &deg;
          </p>
        </div>
      </div>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.shape({
    weather_state_abbr: PropTypes.string.isRequired,
    min_temp: PropTypes.number.isRequired,
    max_temp: PropTypes.number.isRequired,
    applicable_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Day;

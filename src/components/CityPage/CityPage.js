import { faTemperatureArrowDown, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import Day from './Day';
import './CityPage.css';

function CityPage() {
  const { woeid } = useParams();
  const cityList = useSelector((state) => state.city);
  const city = cityList.filter((city) => city.woeid === Number(woeid));

  // App the name of the city to the tab Title
  const loc = useLocation();
  const currLocation = loc.pathname.split('/')[3];
  useEffect(() => {
    document.title = `Weather App | ${currLocation[0]}${currLocation.slice(1)}`;
  }, [currLocation]);

  return (
    <div className="city-page">
      <section className="c-header">
        <section className="c-today-state">
          <img className="c-state" src={`https://www.metaweather.com/static/img/weather/${city[0].consolidated_weather[0].weather_state_abbr}.svg`} alt="weather-status" width="200px" />
          <p className="c-temp">
            {Math.floor(city[0].consolidated_weather[0].the_temp)}
            &deg;
          </p>
        </section>
        <section className="c-today-weather">
          <h2 className="c-city-name">{city[0].title}</h2>
          <section className="c-time-zone">
            <p className="c-time">{moment(city[0].time).format('ddd, Do, h:mm A')}</p>
            <p className="c-timezone">{city[0].timezone_name}</p>
          </section>
          <section className="c-temps">
            <div className="c-temp-l">
              <FontAwesomeIcon icon={faTemperatureArrowDown} />
              <p>
                {Math.floor(city[0].consolidated_weather[0].min_temp)}
                &deg;
              </p>
            </div>
            <div className="c-temp-h">
              <FontAwesomeIcon icon={faTemperatureArrowUp} />
              <p>
                {Math.floor(city[0].consolidated_weather[0].max_temp)}
                &deg;
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className="c-daily-forecast">
        <h3 className="c-heading">Forecast</h3>
        {city[0].consolidated_weather.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </section>
    </div>
  );
}

export default CityPage;

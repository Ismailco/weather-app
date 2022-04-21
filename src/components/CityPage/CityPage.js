import { faTemperatureArrowDown, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Day from './Day';
import './CityPage.css';

function CityPage() {
  const { woeid } = useParams();
  const cityList = useSelector((state) => state.city);
  const city = cityList.filter((city) => city.woeid === Number(woeid));

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
            <p className="c-time">{city[0].time}</p>
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

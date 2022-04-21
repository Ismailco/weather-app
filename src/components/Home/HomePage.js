import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchGetData } from '../../redux/city/city';
import City from '../City/City';
import './HomePage.css';

function HomePage() {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city.length === 0) {
      dispatch(dispatchGetData('ma'));
    }
  }, []);

  return (
    <div>
      {city.length === 0 && (
        <div className="loading-wraper">
          <FontAwesomeIcon className="loading" icon={faSpinner} />
        </div>
      )}
      {city.length > 0 && (
        <div>
          <section className="city-unit">
            {city.map((city) => (
              <City city={city} weather={city.consolidated_weather} key={city.woeid} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default HomePage;

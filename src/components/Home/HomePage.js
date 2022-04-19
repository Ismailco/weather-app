import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchGetData } from '../../redux/city/city';
import City from '../City/City';
import './HomePage.css';

function HomePage() {
  const citys = useSelector((state) => state.citys);
  const dispatch = useDispatch();
  useEffect(() => {
    if (citys.length === 0) {
      dispatch(dispatchGetData('ma'));
    }
  }, []);

  return (
    <div>
      {citys.length < 1 && <h2 className="empty-list">The is no Weather Data for now!</h2>}
      {citys.length > 0 && (
        <div>
          <h2>Weather in: Place</h2>
          <section className="city-unit">
            {citys.map((city) => (
              <City city={city} key={city.woeid} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default HomePage;

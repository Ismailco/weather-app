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
      dispatch(dispatchGetData());
    }
  }, []);

  return (
    <div>
      <h2>Weather in: Place</h2>
      {citys.map((city) => (
        <City city={city} key={city.woeid} />
      ))}
    </div>
  );
}

export default HomePage;

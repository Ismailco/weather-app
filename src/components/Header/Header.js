import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome } from '@fortawesome/free-solid-svg-icons';
import { dispatchGetData } from '../../redux/city/city';

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="home">
        <a href="/">
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
        </a>
      </div>
      <p className="current-tab">most views</p>
      <div className="nav">
        <input className="search-input" type="text" required onInput={(e) => dispatch(dispatchGetData(e.target.value))} />
        <a href="/">
          <FontAwesomeIcon className="fa-icon" icon={faGear} />
        </a>
      </div>
    </div>
  );
}

export default Header;

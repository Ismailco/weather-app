import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <div className="home">
        <a href="/">
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
        </a>
      </div>
      <p className="current-tab">most views</p>
      <div className="nav">
        <input className="search-input" type="text" required />
        <a href="/">
          <FontAwesomeIcon className="fa-icon" icon={faGear} />
        </a>
      </div>
    </div>
  );
}

export default Header;

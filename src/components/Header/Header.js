import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear, faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { removeData, dispatchGetData } from '../../redux/city/city';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(removeData());
      dispatch(dispatchGetData(e.target.value));
      e.target.value = '';
    }
  };

  const handleClolor = () => {
    if (document.body.style.backgroundColor === 'rgb(67, 105, 178)') {
      document.body.style.backgroundColor = 'rgb(235, 76, 137)';
    } else {
      document.body.style.backgroundColor = 'rgb(67, 105, 178)';
    }
    console.log(document.body.style.backgroundColor);
  };

  return (
    <div className="header">
      <div className="home">
        <button type="button" className="header-btn" onClick={() => navigate(-1)}>
          <FontAwesomeIcon className="fa-icon" icon={faArrowLeft} />
        </button>
        <a href="/">
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
        </a>
      </div>
      <p className="current-tab">Global Forecast</p>
      <div className="nav">
        <input className="search-input" type="text" required onKeyPress={(e) => onKeyPress(e)} />
        <button type="button" className="header-btn" onClick={() => handleClolor()}>
          <FontAwesomeIcon className="fa-icon" icon={faGear} />
        </button>
      </div>
    </div>
  );
}

export default Header;

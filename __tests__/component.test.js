/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/redux/city/city';
import HomePage from '../src/components/Home/HomePage';
import Header from '../src/components/Header/Header';
import App from '../src/App';
import 'isomorphic-fetch';

const data = {
  title: 'Casablanca',
  location_type: 'City',
  woeid: 1532755,
  latt_long: '33.596611,-7.619340',
  timezone: 'Africa/Casablanca',
  consolidated_weather: [
    {
      id: 5950947143450624,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      wind_direction_compass: 'WSW',
      created: '2022-04-22T13:46:58.741177Z',
      applicable_date: '2022-04-22',
      min_temp: 11.475000000000001,
      max_temp: 20.615000000000002,
      the_temp: 19.455,
      wind_speed: 14.286615712818474,
      wind_direction: 246.17416337531438,
      air_pressure: 1010.0,
      humidity: 62,
      visibility: 12.152777777777779,
      predictability: 73,
    },
    {
      id: 5593192406712320,
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      wind_direction_compass: 'W',
      created: '2022-04-22T13:47:02.029156Z',
      applicable_date: '2022-04-23',
      min_temp: 14.48,
      max_temp: 19.445,
      the_temp: 18.855,
      wind_speed: 9.501171875818551,
      wind_direction: 262.8672855344178,
      air_pressure: 1014.5,
      humidity: 60,
      visibility: 12.474026684164478,
      predictability: 75,
    },
    {
      id: 5520167023935488,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'N',
      created: '2022-04-22T13:47:04.742683Z',
      applicable_date: '2022-04-24',
      min_temp: 12.715,
      max_temp: 19.465,
      the_temp: 18.91,
      wind_speed: 6.416891456409236,
      wind_direction: 11.0,
      air_pressure: 1015.0,
      humidity: 57,
      visibility: 12.683118090352341,
      predictability: 71,
    },
    {
      id: 6056626055282688,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'N',
      created: '2022-04-22T13:47:08.056645Z',
      applicable_date: '2022-04-25',
      min_temp: 13.11,
      max_temp: 19.759999999999998,
      the_temp: 19.09,
      wind_speed: 6.201440273599512,
      wind_direction: 1.941307521419306,
      air_pressure: 1013.5,
      humidity: 65,
      visibility: 12.397287341923168,
      predictability: 70,
    },
    {
      id: 6719092313554944,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'N',
      created: '2022-04-22T13:47:11.352931Z',
      applicable_date: '2022-04-26',
      min_temp: 13.2,
      max_temp: 20.125,
      the_temp: 19.695,
      wind_speed: 5.956837610506642,
      wind_direction: 357.56020527692584,
      air_pressure: 1015.5,
      humidity: 61,
      visibility: 12.817644953471724,
      predictability: 70,
    },
    {
      id: 4615331768172544,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'N',
      created: '2022-04-22T13:47:14.058505Z',
      applicable_date: '2022-04-27',
      min_temp: 14.2,
      max_temp: 20.425,
      the_temp: 19.82,
      wind_speed: 5.626198202497415,
      wind_direction: 4.999999999999999,
      air_pressure: 1020.0,
      humidity: 74,
      visibility: 9.999726596675416,
      predictability: 71,
    },
  ],
  time: '2022-04-22T14:48:13.528006Z',
  sun_rise: '2022-04-22T05:51:52.202109Z',
  sun_set: '2022-04-22T19:06:38.314590Z',
  timezone_name: 'LMT',
  parent: {
    title: 'Morocco',
    location_type: 'Country',
    woeid: 23424893,
    latt_long: '31.434200,-6.402450',
  },
  sources: [
    {
      title: 'BBC',
      slug: 'bbc',
      url: 'http://www.bbc.co.uk/weather/',
      crawl_rate: 360,
    },
    {
      title: 'Forecast.io',
      slug: 'forecast-io',
      url: 'http://forecast.io/',
      crawl_rate: 480,
    },
    {
      title: 'Met Office',
      slug: 'met-office',
      url: 'http://www.metoffice.gov.uk/',
      crawl_rate: 180,
    },
    {
      title: 'OpenWeatherMap',
      slug: 'openweathermap',
      url: 'http://openweathermap.org/',
      crawl_rate: 360,
    },
    {
      title: 'Weather Underground',
      slug: 'wunderground',
      url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
      crawl_rate: 720,
    },
    {
      title: 'World Weather Online',
      slug: 'world-weather-online',
      url: 'http://www.worldweatheronline.com/',
      crawl_rate: 360,
    },
  ],
};

// I created the same actions and redeucer here instead of importing them
// Action
const GET_DATA = 'weatherApp/city/GET_DATA';
export const getData = (citys) => ({
  type: GET_DATA,
  payload: {
    citys,
  },
});

// Create store
const rootReducer = combineReducers({
  city: reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);
store.dispatch(getData(data));

describe('Countries List ', () => {
  it('renders CityPage correctly', () => {
    const countries = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(countries).toMatchSnapshot();
  });
  it('renders HomePage correctly', () => {
    const regions = renderer
      .create(
        <Provider store={store}>
          <Router>
            <HomePage />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(regions).toMatchSnapshot();
  });
  test('renders App correctly', () => {
    const pollutions = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(pollutions).toMatchSnapshot();
  });
});

const GET_DATA = 'weatherApp/city/GET_DATA';
const GET_CITY_DETAIL = 'weather/city/GET_CITY_DETAIL';

export const getData = (citys) => ({
  type: GET_DATA,
  payload: {
    citys,
  },
});

export const getCityDetail = (data) => ({
  type: GET_CITY_DETAIL,
  payload: {
    data,
  },
});

export const dispatchGetData = (city) => async (dispatch) => {
  const apiUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  })
    .then((response) => {
      const weatherData = response.json();
      return weatherData;
    })
    .then((data) => {
      const result = data.map((city) => ({
        title: city.title,
        type: city.location_type,
        woeid: city.woeid,
        latt_long: city.latt_long,
      }));
      dispatch(getData(result));
      return data;
    })
    .then((cityList) => {
      const cityState = [];
      cityList.forEach((city) => {
        fetch(`https://www.metaweather.com/api/location/${city.woeid}`)
          .then((response) => {
            const cityInfo = response.json();
            return cityInfo;
          })
          .then((data) => {
            cityState.push(data);
          });
      });
      dispatch(getCityDetail(cityState));
    })
    .catch((e) => {
      throw new Error(e);
    });
};

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.citys;
    case GET_CITY_DETAIL:
      return state.concat({ details: action.payload.data });
    default:
      return state;
  }
};

export default reducer;

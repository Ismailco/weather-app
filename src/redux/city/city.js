const GET_DATA = 'weatherApp/city/GET_DATA';
const REMOVE_DATA = 'weatherApp/city/REMOVE_DATA';

export const getData = (citys) => ({
  type: GET_DATA,
  payload: {
    citys,
  },
});

export const getCityInfo = async (id) => {
  const fetchData = await fetch(`https://radiant-island-69019.herokuapp.com/https://www.metaweather.com/api/location/${id}`);
  const cityInfo = await fetchData.json();
  return cityInfo;
};

export const dispatchGetData = (city) => async (dispatch) => {
  const apiUrl = `https://radiant-island-69019.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`;
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
      return result;
    })
    .then((res) => {
      res.forEach((city) => getCityInfo(city.woeid).then((city) => dispatch(getData(city))));
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const removeData = () => ({
  type: REMOVE_DATA,
});

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DATA:
      return state.concat({ ...action.payload.citys });
    case REMOVE_DATA:
      return [];
    default:
      return state;
  }
};

export default reducer;

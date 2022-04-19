const GET_DATA = 'weatherApp/city/GET_DATA';

export const getData = (citys) => ({
  type: GET_DATA,
  payload: {
    citys,
  },
});

export const dispatchGetData = () => async (dispatch) => {
  const apiUrl = 'https://www.metaweather.com/api/location/search/?query=a';
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
      console.log(data);
      const result = data.map((city) => ({
        title: city.title,
        type: city.location_type,
        woeid: city.woeid,
        latt_long: city.latt_long,
      }));
      dispatch(getData(result));
    })
    .catch((e) => {
      throw new Error(e);
    });
};

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.citys;
    default:
      return state;
  }
};

export default reducer;

// const GET_CITY_DETAIL = 'weather/city/GET_CITY_DETAIL';

// export const getCityDetail = (info) => ({
//   type: GET_CITY_DETAIL,
//   payload: {
//     info,
//   },
// });

// export const getCityInfo = (id) => (dispatch) => {
//   fetch(`https://www.metaweather.com/api/location/${id}`)
//     .then((response) => {
//       const cityInfo = response.json();
//       return cityInfo;
//     })
//     .then((data) => {
//       const result = data;
//       dispatch(getCityDetail(result));
//     })
//     .catch((e) => {
//       throw new Error(e);
//     });
// };

// const reducer = (state = [], action = {}) => {
//   switch (action.type) {
//     case GET_CITY_DETAIL:
//       // return state.concat({ ...action.payload.info });
//       return city.forEach((city) => {
//         state.forEach((el) => {
//           city.woeid === action.payload.info.woeid ? { ...city, ...el } : '';
//         });
//       });
//     default:
//       return state;
//   }
// };

// export default reducer;

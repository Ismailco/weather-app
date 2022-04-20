import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cityReducer from './city/city';
// import infoReducer from './info/info';

const root = combineReducers({
  city: cityReducer,
});
const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(cityReducer);
export default store;

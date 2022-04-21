import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cityReducer from './city/city';

const root = combineReducers({
  city: cityReducer,
});
const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(cityReducer);
export default store;

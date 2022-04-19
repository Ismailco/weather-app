import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './city/city';

const root = combineReducers({
  citys: reducer,
});
const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(reducer);
export default store;

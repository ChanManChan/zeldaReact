import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer';
import mapReducer from '../features/map/reducer';
const rootReducer = combineReducers({
  /*Each react component that we create that needs to have state have its own reducer and those reducers are going to be included in this rootReducer

  Reducer is simply a javascript object, that has keys and the keys have values and the values are your stored states and keys are how you access that stored state.
  */
  player: playerReducer,
  map: mapReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

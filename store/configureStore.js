import {configureStore} from '@reduxjs/toolkit';
import jokesReducer from './reducers/jokes';

const store = configureStore({
  reducer: jokesReducer,
});

export default store;

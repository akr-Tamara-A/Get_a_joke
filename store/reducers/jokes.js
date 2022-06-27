import {
  GET_LATEST_JOKES,
  FAILURE_GET_LATEST_JOKES,
  GET_SAVED_JOKES,
  FAILURE_GET_SAVED_JOKES,
  UPDATE_LATEST_JOKES,
  ADD_JOKE_TO_SAVED,
  DELETE_JOKE_FROM_SAVED,
} from '../actions/jokes';

import asyncStorageApi, {
  KEYSLATEST,
  KEYSSAVED,
} from '../../utils/AsyncStorageApi';

const initialState = {
  savedJokes: [],
  latestJokes: [],
  error: '',
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_JOKES:
      return {...state, latestJokes: action.latestJokes};

    case FAILURE_GET_LATEST_JOKES:
      return {...state, error: action.error};

    case GET_SAVED_JOKES:
      return {...state, savedJokes: action.savedJokes};

    case FAILURE_GET_SAVED_JOKES:
      return {...state, error: action.error};

    case UPDATE_LATEST_JOKES:
      const prevLatestJokes = [...state.latestJokes];
      if (prevLatestJokes.length >= 100) {
        prevLatestJokes.pop();
      }
      asyncStorageApi.storeData(KEYSLATEST, [
        action.newJoke,
        ...prevLatestJokes,
      ]);
      return {...state, latestJokes: [action.newJoke, ...prevLatestJokes]};

    case ADD_JOKE_TO_SAVED:
      const arr1 = [...state.savedJokes];
      const arr2 = [action.savedJoke, ...arr1];
      asyncStorageApi.storeData(KEYSSAVED, arr2);
      return {
        ...state,
        savedJokes: arr2,
      };

    case DELETE_JOKE_FROM_SAVED:
      return {
        ...state,
        savedJokes: state.savedJokes.filter(joke => joke.id !== action.id),
      };
  }
  return state;
};

export default jokesReducer;

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
      const newLatestJokes = [action.newJoke, ...prevLatestJokes];

      asyncStorageApi.storeData(KEYSLATEST, newLatestJokes);
      return {...state, latestJokes: newLatestJokes};

    case ADD_JOKE_TO_SAVED:
      const newSavedJokes = [action.joke, ...state.savedJokes];
      asyncStorageApi.storeData(KEYSSAVED, newSavedJokes);
      return {...state, savedJokes: newSavedJokes};

    case DELETE_JOKE_FROM_SAVED:
      const jokeIndex = state.savedJokes.findIndex(
        joke => joke.id === action.id,
      );
      if (jokeIndex > -1) {
        const updatedSavedJokes = [...state.savedJokes];
        updatedSavedJokes.splice(jokeIndex, 1);
        return {...state, savedJokes: updatedSavedJokes};
      }
  }
  return state;
};

export default jokesReducer;

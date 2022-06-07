import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_LATEST_JOKES,
  UPDATE_LATEST_JOKES,
  GET_SAVED_JOKES,
  ADD_JOKE_TO_SAVED,
  DELETE_JOKE_FROM_SAVED,
} from '../actions/jokes';

const initialState = {
  savedJokes: [],
  latestJokes: [],
};

const KEYSSAVED = 'jokes_savedJokes';
const KEYSLATEST = 'jokes_latestJokes';

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_JOKES:
      return {...state, latestJokes: [...getData(KEYSLATEST)]};

    case UPDATE_LATEST_JOKES:
      const prevLatestJokes = [...state.latestJokes];
      prevLatestJokes.pop();
      const newLatestJokes = [action.newJoke, ...prevLatestJokes];
      storeData(KEYSLATEST, newLatestJokes);
      return {...state, latestJokes: newLatestJokes};

    case GET_SAVED_JOKES:
      return {...state, latestJokes: [...getData(KEYSSAVED)]};

    case ADD_JOKE_TO_SAVED:
      const newSavedJokes = [action.joke, ...state.savedJokes];
      storeData(KEYSSAVED, newSavedJokes);
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

/** */
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

/** */
const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default jokesReducer;

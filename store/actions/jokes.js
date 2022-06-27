import asyncStorageApi, {
  KEYSLATEST,
  KEYSSAVED,
} from '../../utils/AsyncStorageApi';

export const GET_LATEST_JOKES = 'GET_LATEST_JOKES';
export const FAILURE_GET_LATEST_JOKES = 'FAILURE_GET_LATEST_JOKES';
export const GET_SAVED_JOKES = 'GET_SAVED_JOKES';
export const FAILURE_GET_SAVED_JOKES = 'FAILURE_GET_SAVED_JOKES';
export const UPDATE_LATEST_JOKES = 'UPDATE_LATEST_JOKES';
export const ADD_JOKE_TO_SAVED = 'ADD_JOKE_TO_SAVED';
export const DELETE_JOKE_FROM_SAVED = 'DELETE_JOKE_FROM_SAVED';

export const getLatestJokes = () => {
  return dispatch => {
    asyncStorageApi
      .getData(KEYSLATEST)
      .then(data => {
        dispatch({type: GET_LATEST_JOKES, latestJokes: data ? data : []});
      })
      .catch(err => {
        dispatch({type: FAILURE_GET_LATEST_JOKES, error: err});
      });
  };
};

export const updateLatestJokes = data => {
  return {
    type: UPDATE_LATEST_JOKES,
    newJoke: data,
  };
};

export const getSavedJokes = () => {
  return dispatch => {
    asyncStorageApi
      .getData(KEYSSAVED)
      .then(data => {
        dispatch({type: GET_SAVED_JOKES, savedJokes: data ? data : []});
      })
      .catch(err => {
        dispatch({type: FAILURE_GET_SAVED_JOKES, error: err});
      });
  };
};

export const addJokeToSaved = savedJoke => {
  return {
    type: ADD_JOKE_TO_SAVED,
    savedJoke: savedJoke,
  };
};

export const deleteJokeFromSaved = id => {
  return {
    type: DELETE_JOKE_FROM_SAVED,
    id: id,
  };
};

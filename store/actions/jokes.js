export const GET_LATEST_JOKES = 'GET_LATEST_JOKES';
export const UPDATE_LATEST_JOKES = 'UPDATE_LATEST_JOKES';
export const GET_SAVED_JOKES = 'GET_SAVED_JOKES';
export const ADD_JOKE_TO_SAVED = 'ADD_JOKE_TO_SAVED';
export const DELETE_JOKE_FROM_SAVED = 'DELETE_JOKE_FROM_SAVED';

export const getLatestJokes = () => {
  return {
    type: GET_LATEST_JOKES,
  };
};

export const updateLatestJokes = data => {
  return {
    type: UPDATE_LATEST_JOKES,
    newJoke: data,
  };
};

export const getSavedJokes = () => {
  return {
    type: GET_SAVED_JOKES,
  };
};

export const addJokeToSaved = data => {
  return {
    type: ADD_JOKE_TO_SAVED,
    joke: {
      text: data.text,
      category: data.category,
      flags: data.flags,
      id: data.id,
      date: data.date,
    },
  };
};

export const deleteJokeFromSaved = id => {
  return {
    type: DELETE_JOKE_FROM_SAVED,
    id: id,
  };
};

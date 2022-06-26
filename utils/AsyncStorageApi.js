import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEYSLATEST = 'jokes_latestJokes';
export const KEYSSAVED = 'jokes_savedJokes';

class AsyncStorageApi {
  constructor(options) {}

  /** */
  storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  /** */
  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };
}

const asyncStorageApi = new AsyncStorageApi();

export default asyncStorageApi;

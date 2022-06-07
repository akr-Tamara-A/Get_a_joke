import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LightTheme from './styles/LightTheme';
import DarkTheme from './styles/DarkTheme';
import MainNavigator from './navigation/MainNavigator';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore;

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => setIsLightTheme(previousState => !previousState);

  return (
    <Provider store={store}>
      <NavigationContainer theme={isLightTheme ? LightTheme : DarkTheme}>
        <MainNavigator onChangeTheme={toggleTheme} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LightTheme from './styles/LightTheme';
import DarkTheme from './styles/DarkTheme';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => setIsLightTheme(previousState => !previousState);

  return (
    <NavigationContainer theme={isLightTheme ? LightTheme : DarkTheme}>
      <MainNavigator onChangeTheme={toggleTheme} />
    </NavigationContainer>
  );
};

export default App;

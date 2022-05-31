import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import SunIcon from './components/icons/SunIcon';
import LightTheme from './styles/LightTheme';
import DarkTheme from './styles/DarkTheme';
import GetJoke from './screens/GetJoke';
import History from './screens/History';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => setIsLightTheme(previousState => !previousState);

  return (
    <NavigationContainer theme={isLightTheme ? LightTheme : DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isLightTheme
              ? LightTheme.background
              : DarkTheme.background,
          },
          headerTintColor: isLightTheme ? LightTheme.text : DarkTheme.text,
          headerRight: () => {
            return (
              <TouchableWithoutFeedback onPress={toggleTheme}>
                <View style={styles.button}>
                  <SunIcon
                    strokeColor={isLightTheme ? '#ff5345' : '#ff5345'}
                    fillColor={isLightTheme ? '#ff5345' : 'transparent'}
                  />
                  <SunIcon
                    strokeColor={isLightTheme ? '#215a00' : '#215a00'}
                    fillColor={isLightTheme ? 'transparent' : '#215a00'}
                  />
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}>
        <Stack.Screen
          name="Get good mood"
          component={Home}
          options={{
            title: 'Get some good mood',
          }}
        />
        <Stack.Screen
          name="Get joke"
          component={GetJoke}
          options={{
            title: 'Get new joke',
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'Latest jokes',
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Saved jokes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 26,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});

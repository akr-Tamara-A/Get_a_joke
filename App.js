import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import GetJoke from './screens/GetJoke';
import History from './screens/History';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

import 'react-native-gesture-handler';
import React from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import GetJoke from '../screens/GetJoke';
import History from '../screens/History';
import Favorites from '../screens/Favorites';
import SunIcon from '../components/icons/SunIcon';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainNavigator = ({navigation, onChangeTheme}) => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerRight: () => {
          return (
            <TouchableWithoutFeedback onPress={onChangeTheme}>
              <View style={styles.button}>
                <SunIcon
                  strokeColor={colors.background}
                  fillColor={colors.background}
                />
                <SunIcon
                  strokeColor={colors.background2}
                  fillColor={colors.background2}
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
  );
};

export default MainNavigator;

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

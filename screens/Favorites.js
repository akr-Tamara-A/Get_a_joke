import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Favorites = ({navigation, route}) => {
  const {colors} = useTheme();

  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      style={styles.linearGradient}>
      <Text>Favorites</Text>
    </LinearGradient>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
});

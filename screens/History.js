import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const History = ({navigation, route}) => {
  const {colors} = useTheme();

  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      style={styles.linearGradient}>
      <Text>History</Text>
    </LinearGradient>
  );
};

export default History;

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

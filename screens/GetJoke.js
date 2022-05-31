import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const GetJoke = ({navigation, route}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
  });

  /** */
  return (
    <LinearGradient
      colors={[colors.background, colors.background2]}
      style={styles.linearGradient}>
      <View style={styles.screen}>
        <Text>Get a joke</Text>
      </View>
    </LinearGradient>
  );
};

export default GetJoke;

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const MainButton = ({text, onPress}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: colors.primary,
      borderRadius: 12,
      borderColor: colors.border,
      borderWidth: 1,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 28,
      color: colors.text,
      textTransform: 'uppercase',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

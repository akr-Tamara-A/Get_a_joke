import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SecondaryButton = ({text, onPress}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 5,
      paddingHorizontal: 12,
      margin: 6,
      backgroundColor: colors.card,
      borderRadius: 8,
      borderColor: colors.border,
      borderWidth: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: colors.text,
      marginRight: 5,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

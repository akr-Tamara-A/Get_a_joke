import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SecondaryButton from './SecondaryButton';

const JokeItem = ({data}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    view: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      borderColor: colors.border,
      borderWidth: 1,
    },
    date: {
      fontSize: 16,
      color: colors.text,
    },
    category: {
      color: colors.text,
      fontSize: 16,
      fontWeight: 'bold',
    },
    flags: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.notification,
      textAlign: 'center',
    },
    text: {
      color: colors.text,
      fontSize: 18,
      lineHeight: 30,
      marginBottom: 20,
    },
  });
  return (
    <View style={styles.view}>
      <Text style={styles.date}>{data.date}</Text>
      <Text style={styles.category}>Category: {data.category}</Text>
      <Text style={styles.flags}>{data.flags.join('  ')}</Text>
      <Text style={styles.text}>{data.text}</Text>
      <Text style={styles.category}>{data.saved}</Text>
      <SecondaryButton
        text={data.saved ? 'Remove' : 'Save'}
        disabled={false}
        onPress={() => {}}
      />
    </View>
  );
};

export default JokeItem;

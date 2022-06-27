import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SecondaryButton from './SecondaryButton';
import {useDispatch} from 'react-redux';
import * as jokeActions from '../store/actions/jokes';

const JokeItem = ({data, saved}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();

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
      <SecondaryButton
        text={saved ? 'Remove' : 'Save'}
        disabled={false}
        onPress={() =>
          saved
            ? dispatch(jokeActions.deleteJokeFromSaved(data.id))
            : dispatch(jokeActions.addJokeToSaved(data))
        }
      />
    </View>
  );
};

export default JokeItem;

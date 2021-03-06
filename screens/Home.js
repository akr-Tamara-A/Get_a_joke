import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from '../components/MainButton';
import {useDispatch} from 'react-redux';
import * as jokeActions from '../store/actions/jokes';

const Home = ({navigation, route}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jokeActions.getLatestJokes());
    dispatch(jokeActions.getSavedJokes());
  }, [dispatch]);

  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      style={styles.linearGradient}>
      <View style={styles.screen}>
        <MainButton
          text="New joke"
          onPress={() => navigation.navigate('Get joke')}
        />
        <MainButton
          text="Latest jokes"
          onPress={() => navigation.navigate('History')}
        />
        <MainButton
          text="Saved jokes"
          onPress={() => navigation.navigate('Favorites')}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;

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

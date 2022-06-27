import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import JokeItem from '../components/JokeItem';
import SecondaryButton from '../components/SecondaryButton';

const Favorites = ({navigation, route}) => {
  const {colors} = useTheme();
  const savedJokes = useSelector(state => {
    return state.savedJokes;
  });

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    emptyText: {
      fontSize: 18,
      marginVertical: 30,
    },
  });

  const ListEmptyComponent = () => {
    return (
      <View>
        <Text style={styles.emptyText}>You don't have any saved jokes</Text>
        <SecondaryButton
          text="Get some joke"
          onPress={() => navigation.navigate('Get joke')}
        />
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      style={styles.linearGradient}>
      <View style={styles.screen}>
        <FlatList
          data={savedJokes}
          style={styles.scrollView}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <JokeItem data={item} saved={true} />}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </LinearGradient>
  );
};

export default Favorites;

import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import api from '../utils/Api';
import CustomModal from '../components/CustomModal';
import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';
import {data as iconsData} from '../utils/iconsData';
import {useSelector, useDispatch} from 'react-redux';
import * as jokeActions from '../store/actions/jokes';

const GetJoke = ({navigation, route}) => {
  const {colors} = useTheme();
  const savedJokes = useSelector(state => state.savedJokes);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    categoryArr: [
      'Miscellaneous',
      'Programming',
      'Dark',
      'Pun',
      'Spooky',
      'Christmas',
    ],
    blacklistArr: [],
  });

  const [newJokeData, setNewJokeData] = useState({
    joke: {
      text: '',
      flags: '',
      category: '',
      id: '',
      date: '',
      saved: false,
    },
    error: false,
  });

  /** */
  const handleGetJoke = () => {
    api
      .getJoke(filters)
      .then(data => {
        const newJoke = {
          text:
            data.type === 'single'
              ? '\t\t' + data.joke
              : '\t\t' + data.setup + '\n\t\t' + data.delivery,
          flags: flagsToArray(data.flags),
          category: data.category === 'Misc' ? 'Miscellaneous' : data.category,
          id: data.id,
          saved: checkIfSaved(data.id),
          date: new Date(),
        };
        setNewJokeData({
          joke: newJoke,
          error: data.error,
        });
        dispatch(jokeActions.updateLatestJokes(newJoke));
      })
      .catch(err => console.log(err));
  };

  /** */
  const flagsToArray = obj => {
    const flagsArr = [];
    for (let key in obj) {
      if (obj[key]) {
        flagsArr.push(key);
      }
    }
    return flagsArr;
  };

  /** */
  const checkIfSaved = id => {
    let isSaved = false;

    if (savedJokes.length > 0) {
      for (let elem of savedJokes) {
        if (elem.id === id) {
          isSaved = true;
        }
      }
    }
    return isSaved;
  };

  /** */
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    section: {
      marginVertical: 4,
      minWidth: '80%',
    },
    linearGradient: {
      flex: 1,
    },
    icon: {
      height: 24,
      width: 24,
    },
    jokeBlock: {
      marginVertical: 20,
      maxWidth: '80%',
    },
    flags: {
      flexDirection: 'row',
      width: '100%',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.text,
      fontSize: 20,
      marginVertical: 10,
    },
    categoryText: {
      color: colors.text,
      fontSize: 20,
      textAlign: 'center',
      marginLeft: 5,
    },
    flagText: {
      color: colors.primary,
      fontSize: 18,
      marginRight: 10,
      backgroundColor: colors.notification,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 10,
    },
  });

  /** */
  return (
    <LinearGradient
      colors={[colors.background, colors.background2]}
      style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.section}>
          <SecondaryButton
            text="Show filters"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
          <MainButton text="Get joke" onPress={handleGetJoke} />
          <View style={styles.jokeBlock}>
            <View>
              <View style={styles.flags}>
                <Image
                  style={styles.icon}
                  source={iconsData[newJokeData.joke.category]}
                />
                <Text style={styles.categoryText}>
                  {newJokeData.joke.category}
                </Text>
              </View>
              <FlatList
                data={newJokeData.joke.flags}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <Text style={styles.flagText}>{item}</Text>
                )}
                contentContainerStyle={styles.flags}
                horizontal
              />
            </View>
            <Text style={styles.text}>{newJokeData.joke.text}</Text>
            <SecondaryButton
              text="Save"
              disabled={newJokeData.joke.saved}
              onPress={() => {
                dispatch(
                  jokeActions.addJokeToSaved({
                    text: newJokeData.joke.text,
                    category: newJokeData.joke.category,
                    flags: newJokeData.joke.flags,
                    id: newJokeData.joke.id,
                    date: newJokeData.joke.date,
                  }),
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <CustomModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        onClose={() => setModalVisible(!modalVisible)}
        onSetFilters={setFilters}
      />
    </LinearGradient>
  );
};

export default GetJoke;

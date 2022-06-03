import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Modal, SectionList, Text, View, StyleSheet} from 'react-native';
import MainButton from './MainButton';
import OptionItem from './OptionItem';

const CustomModal = ({visible, onRequestClose, onClose, onSetFilters}) => {
  const {colors} = useTheme();

  const [selectedFilters, setSelectedFilters] = useState({
    Miscellaneous: {
      value: true,
      type: 'category',
    },
    Programming: {
      value: true,
      type: 'category',
    },
    Dark: {
      value: true,
      type: 'category',
    },
    Pun: {
      value: true,
      type: 'category',
    },
    Spooky: {
      value: true,
      type: 'category',
    },
    Christmas: {
      value: true,
      type: 'category',
    },
    Nsfw: {
      value: false,
      type: 'blacklist',
    },
    Religious: {
      value: false,
      type: 'blacklist',
    },
    Political: {
      value: false,
      type: 'blacklist',
    },
    Racist: {
      value: false,
      type: 'blacklist',
    },
    Sexist: {
      value: false,
      type: 'blacklist',
    },
    Explicit: {
      value: false,
      type: 'blacklist',
    },
  });

  const data = [
    {
      title: 'Categoties',
      data: [
        'Miscellaneous',
        'Programming',
        'Dark',
        'Pun',
        'Spooky',
        'Christmas',
      ],
    },
    {
      title: 'Blacklist',
      data: ['Nsfw', 'Religious', 'Political', 'Racist', 'Sexist', 'Explicit'],
    },
  ];

  /** */
  const toggleFilter = category => {
    setSelectedFilters({
      ...selectedFilters,
      [category]: {
        value: !selectedFilters[category].value,
        type: selectedFilters[category].type,
      },
    });
  };

  /** */
  const applayFilters = () => {
    const appliedFilters = {
      categoryArr: [],
      blacklistArr: [],
    };
    for (let key in selectedFilters) {
      if (selectedFilters[key].value) {
        if (selectedFilters[key].type === 'category') {
          appliedFilters.categoryArr.push(key);
        } else {
          appliedFilters.blacklistArr.push(key.toLowerCase());
        }
      }
    }
    onSetFilters(appliedFilters);
    onClose(true);
  };

  /** */
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      margin: 20,
      backgroundColor: colors.background2,
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      shadowColor: colors.border,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    sectionHeader: {
      textTransform: 'uppercase',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.text,
      backgroundColor: colors.notification,
      borderRadius: 8,
      paddingVertical: 1,
      marginBottom: 4,
    },
  });

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType={'slide'}>
      <View style={styles.modal}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <OptionItem
              title={item}
              value={selectedFilters[item].value}
              type={selectedFilters[item].type}
              onPress={() => toggleFilter(item)}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
        <MainButton text="Applay filters" onPress={applayFilters} />
      </View>
    </Modal>
  );
};

export default CustomModal;

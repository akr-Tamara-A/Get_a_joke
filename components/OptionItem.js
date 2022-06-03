import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {data} from '../utils/iconsData';
import {useTheme} from '@react-navigation/native';

const OptionItem = ({title, value, type, onPress}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colors.text,
      marginBottom: 8,
      paddingBottom: 2,
      minWidth: '50%',
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      height: 26,
      width: 26,
    },
    text: {
      fontSize: 16,
      marginHorizontal: 5,
      color: colors.text,
    },
    checkmark: {
      width: 26,
      height: 26,
      borderRadius: 13,
      borderColor: colors.border,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Image style={styles.icon} source={data[title]} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.checkmark}>
          {value && (
            <Image
              style={styles.icon}
              source={type === 'category' ? data.Check : data.Forbidden}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OptionItem;

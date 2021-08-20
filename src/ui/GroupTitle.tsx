import React from 'react';

import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {textBoldXl} from '../utils/styles';

import CogIcon from '../icons/CogIcon';
import PlusIcon from '../icons/PlusIcon';
import SearchIcon from '../icons/SearchIcon';

const GroupTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={textBoldXl}>Groups</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.icon}>
          <PlusIcon />
        </View>
        <View style={styles.icon}>
          <CogIcon />
        </View>
        <View style={styles.icon}>
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};

export default GroupTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  icon: {
    marginLeft: 10,
  },
});

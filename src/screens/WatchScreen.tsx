import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ml10, screenContainer} from '../utils/styles';
import {ScrollView} from 'react-native-gesture-handler';

import GroupIcon from '../icons/GroupIcon';
import SearchIcon from '../icons/SearchIcon';
import RoundPatcher from '../ui/RoundPatcher';
import ScreenTitle from '../ui/ScreenTitle';
import Feed from '../ui/Feed';

const WatchScreen = () => {
  return (
    <ScrollView style={screenContainer}>
      <ScreenTitle title="Marketplace">
        <View style={ml10}>
          <GroupIcon />
        </View>
        <View style={ml10}>
          <SearchIcon />
        </View>
      </ScreenTitle>
      <View style={styles.container}>
        <RoundPatcher
          addtionalStyles={styles.button}
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
        <RoundPatcher
          addtionalStyles={styles.button}
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
      </View>
      {Array.from({length: 5}, (_, i) => (
        <Feed key={i} />
      ))}
    </ScrollView>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  button: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});

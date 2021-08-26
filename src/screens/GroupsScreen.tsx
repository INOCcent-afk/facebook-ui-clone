import React from 'react';

import {View} from 'react-native';
import {horizontalScroll, ml10, screenContainer} from '../utils/styles';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import GroupCard from '../ui/GroupCard';
import ScreenTitle from '../ui/ScreenTitle';
import Feed from '../ui/Feed';
import PlusIcon from '../icons/PlusIcon';
import CogIcon from '../icons/CogIcon';
import SearchIcon from '../icons/SearchIcon';
import RoundPatcher from '../ui/RoundPatcher';
import GroupIcon from '../icons/GroupIcon';

const GroupsScreen = () => {
  return (
    <ScrollView style={screenContainer}>
      <ScreenTitle title="Groups">
        <View style={ml10}>
          <PlusIcon />
        </View>
        <View style={ml10}>
          <CogIcon />
        </View>
        <View style={ml10}>
          <SearchIcon />
        </View>
      </ScreenTitle>
      <ScrollView style={horizontalScroll} horizontal>
        <RoundPatcher
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
        <RoundPatcher
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
        <RoundPatcher
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
        <RoundPatcher
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
        <RoundPatcher
          icon={<GroupIcon width={20} color="white" />}
          text="Your Groups"
        />
      </ScrollView>
      <ScrollView style={styles.cardContainer} horizontal>
        {Array.from({length: 5}, (_, i) => (
          <View key={i} style={styles.cardwrapper}>
            <GroupCard name="Angular Developers" />
          </View>
        ))}
      </ScrollView>
      <View>
        <Feed />
      </View>
    </ScrollView>
  );
};

export default GroupsScreen;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  cardwrapper: {
    marginRight: 10,
  },
});

import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {horizontalScroll, ml10, screenContainer} from '../utils/styles';

import GroupIcon from '../icons/GroupIcon';
import SearchIcon from '../icons/SearchIcon';
import ScreenTitle from '../ui/ScreenTitle';
import RoundPatcher from '../ui/RoundPatcher';
import RoomDwarf from '../ui/RoomDwarf';
import Feed from '../ui/Feed';

const GamingScreen = () => {
  return (
    <ScrollView style={screenContainer}>
      <ScreenTitle title="Gaming">
        <View style={ml10}>
          <GroupIcon />
        </View>
        <View style={ml10}>
          <SearchIcon />
        </View>
      </ScreenTitle>
      <ScrollView style={horizontalScroll} horizontal>
        <RoundPatcher text="Your Groups" />
        <RoundPatcher text="Your Groups" />
        <RoundPatcher text="Your Groups" />
        <RoundPatcher text="Your Groups" />
        <RoundPatcher text="Your Groups" />
      </ScrollView>
      <RoomDwarf />
      {Array.from({length: 5}, (_, i) => (
        <Feed key={i} />
      ))}
    </ScrollView>
  );
};

export default GamingScreen;

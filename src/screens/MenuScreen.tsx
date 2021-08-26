import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, ml10, screenContainer, text, textBoldLg} from '../utils/styles';

import SearchIcon from '../icons/SearchIcon';
import ScreenTitle from '../ui/ScreenTitle';
import UserDisplay from '../ui/UserDisplay';
import {ScrollView} from 'react-native-gesture-handler';
import Tile from '../ui/Tile';
import GroupIcon from '../icons/GroupIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import ClockIcon from '../icons/ClockIcon';
import FlagIcon from '../icons/FlagIcon';
import HeartIcon from '../icons/HeartIcon';
import HomeIcon from '../icons/HomeIcon';
import PlayIcon from '../icons/PlayIcon';
import CalendarIcon from '../icons/CalendarIcon';

const MenuScreen = () => {
  return (
    <View style={screenContainer}>
      <ScreenTitle title="Menu">
        <View style={ml10}>
          <SearchIcon />
        </View>
      </ScreenTitle>
      <ScrollView>
        <View style={styles.userContainer}>
          <UserDisplay />
          <View style={ml10}>
            <Text style={textBoldLg}>Michael Dave</Text>
            <Text style={text}>See your profile</Text>
          </View>
        </View>
        <View style={styles.tileContainer}>
          <Tile
            icon={<BookmarkIcon width={35} color="#a336c5" />}
            text="Saved"
          />
          <Tile
            icon={<GroupIcon width={35} color="#55d5c4" />}
            text="Friends"
          />
          <Tile icon={<GroupIcon width={35} color="#23a9fc" />} text="Groups" />
          <Tile icon={<ClockIcon width={35} />} text="Memories" />
          <Tile icon={<FlagIcon width={35} color="#e8532a" />} text="Pages" />
          <Tile
            icon={<HeartIcon width={35} color="#d855b7" />}
            text="COVID-19 Information Center"
          />
          <Tile
            icon={<HomeIcon width={35} color="#21a3fb" />}
            text="Marketplace"
          />
          <Tile
            icon={<PlayIcon width={35} color="#21a3fb" />}
            text="Videos on Watch"
          />
          <Tile
            icon={<HeartIcon width={35} color={colors.crimson} />}
            text="Saved"
          />
          <Tile icon={<CalendarIcon width={35} color="white" />} text="Saved" />
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  userContainer: {
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },

  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

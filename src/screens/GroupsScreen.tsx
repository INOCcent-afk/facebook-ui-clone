import React from 'react';

import {Text, View} from 'react-native';
import {screenContainer} from '../utils/styles';

import GroupTitle from '../ui/GroupTitle';
import {StyleSheet} from 'react-native';
import GroupCard from '../ui/GroupCard';
import {ScrollView} from 'react-native-gesture-handler';
import Feed from '../ui/Feed';

const GroupsScreen = () => {
  return (
    <ScrollView style={screenContainer}>
      <GroupTitle />
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

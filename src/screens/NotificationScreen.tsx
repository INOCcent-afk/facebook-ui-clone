import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ml10, screenContainer, textBoldLg} from '../utils/styles';

import SearchIcon from '../icons/SearchIcon';
import ScreenTitle from '../ui/ScreenTitle';
import NotificationFeed from '../ui/NotificationFeed';

const NotificationScreen: FC = () => {
  return (
    <View style={screenContainer}>
      <ScreenTitle title="Notifications">
        <View style={ml10}>
          <SearchIcon />
        </View>
      </ScreenTitle>
      <ScrollView style={[styles.notifwrapper, styles.test]}>
        <View style={styles.container}>
          <Text style={textBoldLg}>Earlier</Text>
        </View>
        {Array.from({length: 5}, (_, i) => (
          <NotificationFeed key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  test: {
    marginTop: -5,
  },
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  notifwrapper: {
    marginVertical: 20,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {textBoldMd} from '../utils/styles';
import ButtonComponent from './inputs/ButtonComponent';
import UserDisplay from './UserDisplay';

const RoomDwarf = () => {
  return (
    <View style={styles.container}>
      <Text style={[textBoldMd, {paddingVertical: 10, fontSize: 16}]}>
        Audio and Video Rooms
      </Text>
      <View style={styles.wrapper}>
        <ButtonComponent />
        <ScrollView style={styles.userdisplayContainer} horizontal>
          {Array.from({length: 5}, (_, i) => (
            <View key={i} style={styles.userdisplayWrapper}>
              <UserDisplay badge={true} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RoomDwarf;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopColor: 'black',
    borderTopWidth: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userdisplayContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  userdisplayWrapper: {
    marginRight: 15,
  },
});

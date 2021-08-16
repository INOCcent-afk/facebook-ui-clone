import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComponent from './inputs/ButtonComponent';
import UserDisplay from './UserDisplay';

const RoomDwarf = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent />
      <View style={styles.userdisplayContainer}>
        <View style={styles.userdisplayWrapper}>
          <UserDisplay />
        </View>
        <View style={styles.userdisplayWrapper}>
          <UserDisplay />
        </View>
        <View style={styles.userdisplayWrapper}>
          <UserDisplay />
        </View>
        <View style={styles.userdisplayWrapper}>
          <UserDisplay />
        </View>
      </View>
    </View>
  );
};

export default RoomDwarf;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopColor: 'black',
    borderTopWidth: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    alignItems: 'center',
  },

  userdisplayContainer: {
    flexDirection: 'row',
  },

  userdisplayWrapper: {
    marginLeft: 20,
  },
});

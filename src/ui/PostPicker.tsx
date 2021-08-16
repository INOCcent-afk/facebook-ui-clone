import React from 'react';
import {StyleSheet, View} from 'react-native';
import RoundInput from './inputs/RoundInput';
import PostOptions from './PostOptions';
import UserDisplay from './UserDisplay';

const PostPicker = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postWrapper}>
        <View style={{marginRight: 20}}>
          <UserDisplay />
        </View>
        <RoundInput />
      </View>
      <PostOptions />
    </View>
  );
};

export default PostPicker;

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'column',
  },

  postWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
});

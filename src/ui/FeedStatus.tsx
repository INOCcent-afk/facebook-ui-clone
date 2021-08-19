import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LikeIcon from '../icons/LikeIcon';
import {text} from '../utils/styles';

const FeedStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.reactsContainer}>
        <LikeIcon width={20} height={20} />
        <Text style={[styles.text, text]}>2.3k</Text>
      </View>
      <View style={styles.interactionContainer}>
        <View style={styles.interactionWrapper}>
          <Text style={text}>178</Text>
          <Text style={[text, {marginLeft: 5}]}>Comments</Text>
        </View>
        <View style={styles.interactionWrapper}>
          <Text style={text}>65</Text>
          <Text style={[text, {marginLeft: 5}]}>Shares</Text>
        </View>
      </View>
    </View>
  );
};

export default FeedStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  reactsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  interactionContainer: {
    flexDirection: 'row',
  },

  interactionWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  text: {
    marginLeft: 10,
  },
});

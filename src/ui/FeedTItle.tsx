import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {text, textBoldLg} from '../utils/styles';

import DotsHorizontal from '../icons/DotsHorizontal';
import GroupIcon from '../icons/GroupIcon';
import UserDisplay from './UserDisplay';

const FeedTItle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <UserDisplay badge={true} />
          <View style={{marginLeft: 15}}>
            <Text style={textBoldLg}>Michael Dave</Text>
            <View style={styles.innerDesc}>
              <Text style={styles.text}>51m</Text>
              <GroupIcon width={20} height={20} />
            </View>
          </View>
        </View>
        <DotsHorizontal />
      </View>
    </View>
  );
};

export default FeedTItle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inner: {
    flexDirection: 'row',
  },

  innerDesc: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    ...text,
    marginRight: 15,
  },
});

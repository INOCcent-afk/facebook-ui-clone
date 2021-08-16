import React from 'react';

import CameraIcon from '../icons/CameraIcon';
import PhotoIcon from '../icons/PhotoIcon';
import VideoIcon from '../icons/VideoIcon';

import {StyleSheet, View, Text} from 'react-native';
import {colors, textBoldMd} from '../utils/styles';

const PostOptions = () => {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSelector}>
        <VideoIcon width={25} height={25} />
        <Text style={[textBoldMd, styles.text]}>Live</Text>
      </View>
      <View style={[styles.postOptionsSelector, styles.photo]}>
        <PhotoIcon width={25} height={25} />
        <Text style={[textBoldMd, styles.text]}>Photo</Text>
      </View>
      <View style={styles.postOptionsSelector}>
        <CameraIcon width={25} height={25} />
        <Text style={[textBoldMd, styles.text]}>Room</Text>
      </View>
    </View>
  );
};

export default PostOptions;

const styles = StyleSheet.create({
  postOptions: {
    borderTopColor: colors.gray,
    borderTopWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  postOptionsSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  text: {
    marginLeft: 10,
  },

  photo: {
    borderColor: colors.gray,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommentIcon from '../icons/CommentIcon';
import LikeOutlineIcon from '../icons/LikeOutlineIcon';
import ShareIcon from '../icons/ShareIcon';
import {colors, textBoldMd} from '../utils/styles';

const FeedInteractionOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <LikeOutlineIcon width={25} height={25} />
        <Text style={[textBoldMd, {color: colors.gray, marginLeft: 10}]}>
          Like
        </Text>
      </View>
      <View style={styles.inner}>
        <CommentIcon width={25} height={25} />
        <Text style={[textBoldMd, {color: colors.gray, marginLeft: 10}]}>
          Comment
        </Text>
      </View>
      <View style={styles.inner}>
        <ShareIcon width={25} height={25} />
        <Text style={[textBoldMd, {color: colors.gray, marginLeft: 10}]}>
          Share
        </Text>
      </View>
    </View>
  );
};

export default FeedInteractionOptions;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: colors.gray,
    borderTopWidth: 0.2,
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

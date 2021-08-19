import React from 'react';
import {View} from 'react-native';
import {feedContainer} from '../utils/styles';
import FeedContent from './FeedContent';
import FeedImage from './FeedImage';
import FeedInteractionOptions from './FeedInteractionOptions';
import FeedStatus from './FeedStatus';
import FeedTItle from './FeedTItle';

const Feed = () => {
  return (
    <View style={feedContainer}>
      <FeedTItle />
      <FeedContent />
      <FeedImage />
      <FeedStatus />
      <FeedInteractionOptions />
    </View>
  );
};

export default Feed;

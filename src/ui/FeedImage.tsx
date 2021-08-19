import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, View} from 'react-native';
import {colors} from '../utils/styles';

const FeedImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/kobe.png')} />
    </View>
  );
};

export default FeedImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
  },
  image: {
    width: undefined,
    resizeMode: 'contain',
    height: 400,
  },
});

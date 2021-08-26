import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DotsHorizontal from '../icons/DotsHorizontal';
import {text, textBoldMd} from '../utils/styles';

const NotificationFeed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/profile.jpg')} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={textBoldMd}>
          John Paul Manabat, Roman Emmanuel Munar and 4 other people reacted to
          a photo you..
        </Text>
        <Text style={text}>3 hours ago</Text>
      </View>
      <DotsHorizontal color="white" />
    </View>
  );
};

export default NotificationFeed;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 50,
    overflow: 'hidden',
  },

  image: {
    height: 80,
    width: 80,
  },
});

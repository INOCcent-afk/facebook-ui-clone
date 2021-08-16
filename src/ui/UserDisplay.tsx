import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const UserDisplay = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/profile.jpg')} />
    </View>
  );
};

export default UserDisplay;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 50,
  },

  image: {
    width: 50,
    height: 50,
  },
});

import React from 'react';

import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import UserDisplay from './UserDisplay';

const CarouselWrap = () => {
  return (
    <View style={styles.container}>
      <Swiper showsButtons={false} showsPagination={false} loop={false}>
        <View style={styles.slide}>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
        <View>
          <UserDisplay />
        </View>
      </Swiper>
    </View>
  );
};

export default CarouselWrap;

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  slide: {},
});

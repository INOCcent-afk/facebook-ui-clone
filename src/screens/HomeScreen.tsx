import React from 'react';

import PostPicker from '../ui/PostPicker';

import {View} from 'react-native';
import {screenContainer} from '../utils/styles';
import ButtonComponent from '../ui/inputs/ButtonComponent';
import RoomDwarf from '../ui/RoomDwarf';
import CarouselWrap from '../ui/CarouselWrap';

const HomeScreen = () => {
  return (
    <View style={screenContainer}>
      <PostPicker />
      <RoomDwarf />
      <CarouselWrap />
    </View>
  );
};

export default HomeScreen;

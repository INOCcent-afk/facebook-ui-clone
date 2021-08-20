import React, {useEffect, useState} from 'react';

import PostPicker from '../ui/PostPicker';

import {screenContainer} from '../utils/styles';
import RoomDwarf from '../ui/RoomDwarf';
import CarouselWrap from '../ui/CarouselWrap';
import {ScrollView} from 'react-native-gesture-handler';
import Feed from '../ui/Feed';

const HomeScreen = () => {
  return (
    <ScrollView style={screenContainer}>
      <PostPicker />
      <RoomDwarf />
      <CarouselWrap />
      {Array.from({length: 5}, (_, i) => (
        <Feed key={i} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

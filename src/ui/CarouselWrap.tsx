import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StoryCard from './StoryCard';

const CarouselWrap = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      {Array.from({length: 30}, (_, i) => (
        <View key={i} style={styles.slide}>
          <StoryCard name="Michael Dave" />
        </View>
      ))}
    </ScrollView>
  );
};

export default CarouselWrap;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  slide: {
    marginRight: 10,
  },
});

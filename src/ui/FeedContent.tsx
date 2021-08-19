import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {colors, text, textBoldMd} from '../utils/styles';

const FeedContent = () => {
  return (
    <View style={styles.container}>
      <Text style={[textBoldMd, {color: colors.white}]}>
        Kyrie shuts down cocky fan with 4-word clap back
      </Text>
    </View>
  );
};

export default FeedContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

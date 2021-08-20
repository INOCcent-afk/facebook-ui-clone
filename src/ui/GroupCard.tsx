import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';

import {StyleSheet} from 'react-native';
import {textBoldMd} from '../utils/styles';

type Props = {
  name: string;
};

const GroupCard: FC<Props> = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDisplay}></View>
      <Image style={styles.image} source={require('../assets/angular.png')} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    width: 120,
    height: 110,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: 120,
    height: 110,
    opacity: 0.8,
  },

  text: {
    ...textBoldMd,
    position: 'absolute',
    width: 60,
    bottom: 10,
    left: 10,
  },

  userDisplay: {
    position: 'absolute',
    zIndex: 5,
    top: 8,
    left: 8,
  },
});

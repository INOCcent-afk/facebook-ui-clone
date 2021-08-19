import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, textBoldMd} from '../utils/styles';
import UserDisplay from './UserDisplay';

type Props = {
  name: string;
};

const StoryCard: FC<Props> = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDisplay}>
        <UserDisplay borderColor={colors.blue} borderWidth={3} />
      </View>
      <Image style={styles.image} source={require('../assets/profile.jpg')} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    width: 120,
    height: 200,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: 120,
    height: 200,
    opacity: 0.8,
  },

  text: {
    ...textBoldMd,
    position: 'absolute',
    fontSize: 16,
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

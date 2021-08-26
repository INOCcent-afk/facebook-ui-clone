import React, {FC, ReactNode} from 'react';

import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {textBoldXl} from '../utils/styles';

type Props = {
  title: string;
  children: ReactNode;
};

const ScreenTitle: FC<Props> = ({title, children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={textBoldXl}>{title}</Text>
      <View style={styles.iconsContainer}>{children}</View>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: 'row',
  },
});

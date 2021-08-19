import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils/styles';

type Props = {
  color?: string;
  border?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const ActiveBadge: FC<Props> = ({
  color = colors.lightGreen,
  border = colors.primaryBackground,
  top,
  left,
  right,
  bottom,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: border,
          backgroundColor: color,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
        },
      ]}></View>
  );
};

export default ActiveBadge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 2,
    zIndex: 5,
  },
});

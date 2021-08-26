import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, textBoldMd} from '../utils/styles';

type Props = {
  icon: ReactNode;
  text: string;
};

const Tile: FC<Props> = ({icon, text}: Props) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={textBoldMd}>{text}</Text>
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.primaryBackground,
    borderRadius: 10,
    margin: 10,
    minWidth: 180,
    flex: 1,
  },
});

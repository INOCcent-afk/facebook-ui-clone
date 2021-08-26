import React, {FC, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {colors, mr10, textBoldMd} from '../utils/styles';

type Props = {
  icon?: ReactNode;
  text: string;
  addtionalStyles?: ViewStyle;
};

const RoundPatcher: FC<Props> = ({icon, text, addtionalStyles}: Props) => {
  return (
    <View style={[styles.container, addtionalStyles]}>
      {icon ? <View style={mr10}>{icon}</View> : null}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default RoundPatcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.primaryBackground,
    marginRight: 15,
    borderRadius: 15,
  },

  text: {
    ...textBoldMd,
    paddingVertical: 10,
  },
});

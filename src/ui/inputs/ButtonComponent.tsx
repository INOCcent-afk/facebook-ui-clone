import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, textBoldMd} from '../../utils/styles';

const ButtonComponent: FC = () => {
  return (
    <View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Create Room</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },

  text: {
    ...textBoldMd,
    color: colors.blue,
  },
});

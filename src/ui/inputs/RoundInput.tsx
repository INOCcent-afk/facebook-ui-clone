import React, {useEffect, useState} from 'react';

import {StyleSheet, TextInput} from 'react-native';
import {colors} from '../../utils/styles';

const RoundInput = () => {
  const [input, setInput] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder="What's on your mind?"
      value={input}
      onChangeText={val => setInput(val)}
      placeholderTextColor={colors.gray}></TextInput>
  );
};

export default RoundInput;

const styles = StyleSheet.create({
  input: {
    color: colors.gray,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    borderColor: colors.gray,
    fontSize: 16,
    flex: 1,
  },
});

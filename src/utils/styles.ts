import {TextStyle, ViewStyle} from 'react-native';

export const colors = {
  primaryBackground: '#242526',
  secondaryBackground: '#18191a',
  blue: '#2d88ff',
  blue20: '#2d88ff20',
  gray: '#b0b3b8',
  crimson: '#f02849',
  green: '#45bd62',
  purple: '#6264d7',
};

export const text: TextStyle = {
  color: 'white',
  fontSize: 12,
};

export const boldText: TextStyle = {
  ...text,
  fontWeight: 'bold',
};

export const textBoldMd: TextStyle = {
  ...boldText,
  fontSize: 14,
};

export const screenContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.secondaryBackground,
};

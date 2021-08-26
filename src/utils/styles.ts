import {TextStyle, ViewStyle} from 'react-native';

export const colors = {
  primaryBackground: '#242526',
  secondaryBackground: '#18191a',
  blue: '#2d88ff',
  blue20: '#2d88ff20',
  gray: '#b0b3b8',
  crimson: '#f02849',
  green: '#45bd62',
  lightGreen: '#31a24c',
  purple: '#6264d7',
  white: '#e4e6eb',
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

export const textBoldLg: TextStyle = {
  ...boldText,
  fontSize: 16,
};

export const textBoldXl: TextStyle = {
  ...boldText,
  fontSize: 24,
};

export const screenContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.secondaryBackground,
};

export const feedContainer: ViewStyle = {
  borderTopColor: 'black',
  borderTopWidth: 8,
  backgroundColor: colors.secondaryBackground,
};

export const roundDropBg: ViewStyle = {
  backgroundColor: colors.primaryBackground,
  paddingVertical: 10,
  paddingHorizontal: 20,
};

export const horizontalScroll: ViewStyle = {
  flexDirection: 'row',
  padding: 10,
};

export const ml10: ViewStyle = {
  marginLeft: 10,
};
export const mr10: ViewStyle = {
  marginRight: 10,
};

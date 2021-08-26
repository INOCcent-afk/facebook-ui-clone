import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const BookmarkIcon: FC<IconProps> = ({
  color = colors.purple,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 20 20">
      <Path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </Svg>
  );
};

export default BookmarkIcon;

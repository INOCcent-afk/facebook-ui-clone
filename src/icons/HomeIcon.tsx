import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const HomeIcon: FC<IconProps> = ({
  color = colors.gray,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 20 20">
      <Path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></Path>
    </Svg>
  );
};

export default HomeIcon;

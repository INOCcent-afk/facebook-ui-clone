import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const DotsHorizontal: FC<IconProps> = ({
  color = colors.gray,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} height={height} width={width} viewBox="0 0 20 20">
      <Path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></Path>
    </Svg>
  );
};

export default DotsHorizontal;

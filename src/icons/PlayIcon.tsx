import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const PlayIcon: FC<IconProps> = ({
  color = colors.gray,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} height={height} width={width} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"></Path>
    </Svg>
  );
};

export default PlayIcon;

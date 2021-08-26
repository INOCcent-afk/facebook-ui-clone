import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const ClockIcon: FC<IconProps> = ({
  color = colors.purple,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClockIcon;

import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const HeartIcon: FC<IconProps> = ({
  color = colors.purple,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HeartIcon;

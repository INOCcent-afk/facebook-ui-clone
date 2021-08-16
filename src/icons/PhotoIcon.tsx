import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const PhotoIcon: FC<IconProps> = ({
  color = colors.green,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clipRule="evenodd"></Path>
    </Svg>
  );
};

export default PhotoIcon;

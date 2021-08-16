import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const VideoIcon: FC<IconProps> = ({
  color = colors.crimson,
  width = 35,
  height = 35,
}) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 20 20">
      <Path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></Path>
    </Svg>
  );
};

export default VideoIcon;

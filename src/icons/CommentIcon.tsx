import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const CommentIcon: FC<IconProps> = ({
  color = colors.gray,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg
      fill="none"
      height={height}
      width={width}
      stroke={color}
      viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></Path>
    </Svg>
  );
};

export default CommentIcon;

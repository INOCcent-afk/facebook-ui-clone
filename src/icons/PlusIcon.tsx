import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../utils/styles';
import {IconProps} from '../utils/types';

const PlusIcon: FC<IconProps> = ({
  color = colors.gray,
  width = 35,
  height = 35,
}: IconProps) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PlusIcon;

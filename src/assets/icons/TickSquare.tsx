import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function TickSquare({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
      />
      <Path
        d="M7.75 12L10.58 14.83L16.25 9.17004" stroke={color} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

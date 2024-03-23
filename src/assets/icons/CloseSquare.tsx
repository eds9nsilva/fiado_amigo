import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function CloseSquare({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
      <Path d="M11.0804 17.3017L17.9196 10.6983" stroke={color} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <Path d="M17.9196 17.3017L11.0804 10.6983" stroke={color} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <Path
        d="M10.875 25.6667H18.125C24.1667 25.6667 26.5833 23.3333 26.5833 17.5V10.5C26.5833 4.66667 24.1667 2.33334 18.125 2.33334H10.875C4.83332 2.33334 2.41666 4.66667 2.41666 10.5V17.5C2.41666 23.3333 4.83332 25.6667 10.875 25.6667Z"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}


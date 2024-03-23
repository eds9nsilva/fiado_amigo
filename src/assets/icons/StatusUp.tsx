import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function StatusUp({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6.87988 18.15V16.08" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <Path d="M12 18.15V14.01" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <Path d="M17.1201 18.15V11.93" stroke={color} stroke-width="1.5" stroke-linecap="round" />
      <Path d="M17.1199 5.84998L16.6599 6.38998C14.1099 9.36998 10.6899 11.48 6.87988 12.43" stroke={color}
        stroke-width="1.5" stroke-linecap="round" />
      <Path d="M14.19 5.85H17.12V8.77" stroke={color} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <Path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

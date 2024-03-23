import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function More({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path
        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path
        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

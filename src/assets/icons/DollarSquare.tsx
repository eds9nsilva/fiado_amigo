import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function DollarSquare({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M12 6V18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke={color}
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

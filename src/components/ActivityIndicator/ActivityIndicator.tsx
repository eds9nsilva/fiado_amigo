import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
  size?: number;
}
export function ActivityIndicator({color, size}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} size={size} />;
}

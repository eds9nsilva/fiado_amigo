import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  backgroundColor,
  spacing,
  layout,
  border,
  createRestyleComponent,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
  spacingShorthand,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  TouchableOpacityProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);

import { createTheme } from '@shopify/restyle';

export const palette = {
    greenPrimary: '#24A19C',
    greenPrimaryLight: '#F2F9F9',

    greenSuccess: '#17A1A1',
    redError: '#FF486A',
    yelloWarning: '#FD8311',

    grayBlack: '#000000',
    gray1: '#A9B0C5',
    gray2: '#8E8E8E',
    gray3: '#B3B3B3',
    gray4: '#E1E1E1',
    gray5: '#F5F5F5',
    grayWhite: '#FFFFFF',
}

export const theme = createTheme({
    colors: {
        ...palette,
        primary: palette.greenPrimary,
        primaryContrast: palette.grayWhite,

        buttonPrimary: palette.greenPrimary,

        background: palette.grayWhite,
        backgroundContrast: palette.grayBlack,

        secundaryBackground: palette.greenPrimaryLight,

        error: palette.redError,
        success: palette.greenSuccess,

    },
    spacing: {
        s4: 4,
        s8: 8,
        s10: 10,
        s12: 12,
        s14: 14,
        s16: 16,
        s20: 20,
        s24: 24,
        s32: 32,
        s40: 40,
        s48: 48,
        s56: 56,
    },
    borderRadii: {
        s8: 8,
        s12: 12,
        s16: 16,
    },
    textVariants: {
        defaults: {},
    },
})

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];


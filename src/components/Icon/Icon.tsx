import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";
import React from "react";
import { Pressable } from "react-native";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { DirectBox } from "../../assets/icons/DirectBox";

export interface IconBase {
    size?: number;
    color?: string;
}

export interface IconProps {
    name: IconNames;
    color?: ThemeColors;
    size?: number;
    onPress?: () => void;
}

export function Icon({
    name,
    color = 'backgroundContrast',
    size,
    onPress,
}: IconProps) {
    const { colors } = useAppTheme();
    const SVGIcon = iconRegistry[name];
    if (onPress) {
        return (
            <Pressable hitSlop={10} onPress={onPress}>
                <SVGIcon color={colors[color]} size={size} />
            </Pressable>
        );
    }
    return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
    directBox: DirectBox,
    arrowLeft: ArrowLeft
};

type IconType = typeof iconRegistry;

type IconNames = keyof IconType;

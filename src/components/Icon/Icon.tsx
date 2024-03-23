import React from "react";
import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";
import { Pressable } from "react-native";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { DirectBox } from "../../assets/icons/DirectBox";
import { EyeOn } from "../../assets/icons/EyeOn";
import { EyeOff } from "../../assets/icons/EyeOff";
import { TickSquare } from "../../assets/icons/TickSquare";
import { Checklist } from "../../assets/icons/Checklist";
import { UserEdit } from "../../assets/icons/UserEdit";
import { DollarSquare } from "../../assets/icons/DollarSquare";
import { ShopAdd } from "../../assets/icons/ShopAdd";
import { StatusUp } from "../../assets/icons/StatusUp";
import { More } from "../../assets/icons/More";
import { CloseSquare } from "../../assets/icons/CloseSquare";
import { Calendar } from "../../assets/icons/Calendar";
import { Cup } from "../../assets/icons/Cup";
import { MinusSquare } from "../../assets/icons/MinusSquare";
import { Home } from "../../assets/icons/Home";
import { UserSquare } from "../../assets/icons/userSquare";

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
    arrowLeft: ArrowLeft,
    eyeOn: EyeOn,
    eyeOff: EyeOff,
    tickSquare: TickSquare,
    checklist: Checklist,
    userEdit: UserEdit,
    dollarSquare: DollarSquare,
    shopAdd: ShopAdd,
    statusUp: StatusUp,
    more: More,
    closeSquare: CloseSquare,
    calendar: Calendar,
    cup: Cup,
    minusSquare: MinusSquare,
    home: Home,
    userSquare: UserSquare,
};

type IconType = typeof iconRegistry;

export type IconNames = keyof IconType;

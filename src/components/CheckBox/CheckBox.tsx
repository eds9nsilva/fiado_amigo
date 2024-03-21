import React from "react";
import { TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";

interface Props {
    size?: number;
    onPress?: () => void;
    isChecked: boolean;
}

export function CheckBox({ size = 16, onPress, isChecked }: Props) {

    return (
        <TouchableOpacityBox
            width={size}
            height={size}
            borderWidth={1}
            borderColor="buttonPrimary"
            borderRadius="s4"
            onPress={onPress}
            alignItems="center"
            justifyContent="center"
            backgroundColor={isChecked ? 'buttonPrimary' : 'background'}
        >
            {
                isChecked && (
                    <Icon name="checklist" size={size} color="background" />
                )
            }
        </TouchableOpacityBox>
    )
}
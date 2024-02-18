import React, {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={() => setIsSecureTextEntry(prev => !prev)}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}

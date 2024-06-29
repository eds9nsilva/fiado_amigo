declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
declare module '*.png'

declare module '@env' {
    export const REACT_NATIVE_ENVIRONMENT: string;
    export const REACT_NATIVE_API_URL_STAGING: string;
    export const REACT_NATIVE_API_URL_LOCAL: string;
    export const REACT_NATIVE_API_URL_PROD: string;
    export const REACT_NATIVE_API_URL_QA: string;
}
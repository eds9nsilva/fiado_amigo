import {
    REACT_NATIVE_ENVIRONMENT,
    REACT_NATIVE_API_URL_STAGING,
    REACT_NATIVE_API_URL_LOCAL,
    REACT_NATIVE_API_URL_PROD,
    REACT_NATIVE_API_URL_QA,
  } from '@env'
  
  const getApiURL = () => {
    console.log(REACT_NATIVE_ENVIRONMENT)
    switch (REACT_NATIVE_ENVIRONMENT) {
      case 'STAGING':
        return REACT_NATIVE_API_URL_STAGING
      case 'LOCAL':
        return REACT_NATIVE_API_URL_LOCAL
      case 'PROD':
        return REACT_NATIVE_API_URL_PROD
      case 'QA':
        return REACT_NATIVE_API_URL_QA
      default:
        return REACT_NATIVE_API_URL_PROD
    }
  }
  
  export const Config = {
    API_URL: getApiURL(),
  }
  

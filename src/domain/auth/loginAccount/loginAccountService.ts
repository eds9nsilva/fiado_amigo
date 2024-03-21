import { ErrorApiResponse } from 'src/@types';
import { authApi } from './createAccountAPI';
import { authAdapter } from './loginAccountAdapter';
import { ParamsLoginAccount } from './loginAccountType';
import { IncorrectEmailOrpassword } from '@services';
import { t } from 'i18next';

async function loginAccount(params: ParamsLoginAccount) {
  try {
    const loginAccountParams: ParamsLoginAccount = {
      email: params.email,
      password: params.password,
    };
    const response = await authApi.loginAccount(loginAccountParams);
    return authAdapter.toAuth(response)
  } catch (error) {
    const erroApi: ErrorApiResponse = error as ErrorApiResponse;
    if (erroApi.response.data.message == IncorrectEmailOrpassword) {
      toast?.show(t('incorrectEmailOrpassword'), {
        type: 'warning',
      });
    } else {
      toast?.show(t('erroGeneric'), {
        type: 'danger',
      });
    }
  }
}

export const loginAccountService = {
  loginAccount,
};

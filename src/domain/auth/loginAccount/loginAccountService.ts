import { ErrorApiResponse } from 'src/@types';
import { authApi } from './createAccountAPI';
import { authAdapter } from './loginAccountAdapter';
import { ParamsLoginAccount } from './loginAccountType';
import { IncorrectEmailOrPassword } from '@services';
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
    const errorApi: ErrorApiResponse = error as ErrorApiResponse;
    if (errorApi.response.data.message == IncorrectEmailOrPassword) {
      toast?.show(t('incorrectEmailOrPassword'), {
        type: 'warning',
      });
    } else {
      toast?.show(t('errorGeneric'), {
        type: 'danger',
      });
    }
  }
}

export const loginAccountService = {
  loginAccount,
};

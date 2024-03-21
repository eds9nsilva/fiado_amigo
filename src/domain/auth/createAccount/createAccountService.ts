import { ErrorApiResponse } from 'src/@types';
import { authApi } from './createAccountAPI';
import { userAdapter } from './createAccountAdapter';
import { ParamsCreateAccount } from './createAccountType';
import { EmailAddressAlready } from '@services';
import { t } from 'i18next';

async function createAccount(params: ParamsCreateAccount) {
  try {
    const createAccountParams: ParamsCreateAccount = {
      email: params.email,
      name: params.name,
      password: params.password,
    };
    const response = await authApi.createAccount(createAccountParams);
    return {
      user: userAdapter.toUser(response),
    };
  } catch (error) {
    const erroApi: ErrorApiResponse = error as ErrorApiResponse;
    if (erroApi.response.data.message == EmailAddressAlready) {
      toast?.show(t('emailAlreadyRegistered'), {
        type: 'warning',
      });
    } else {
      toast?.show(t('erroGeneric'), {
        type: 'danger',
      });
    }
  }
}

export const createAccountService = {
  createAccount,
};

import { ErrorApiResponse } from 'src/@types';
import { clientAdapter } from './clientAdapter';
import { IncorrectEmailOrpassword } from '@services';
import { t } from 'i18next';
import { clientApi } from './clientsAPI';

async function listClients() {
  try {
    const response = await clientApi.listClient();

    return response.map(clientAdapter.toClient)


  } catch (error) {
    console.log(error)
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

export const clientService = {
  listClients,
};

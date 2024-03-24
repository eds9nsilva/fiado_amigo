import { ErrorApiResponse } from 'src/@types';
import { clientAdapter } from './clientAdapter';
import { IncorrectEmailOrpassword } from '@services';
import { t } from 'i18next';
import { clientApi } from './clientsAPI';
import { RegisterClientsSchema } from '../../screens/app/RegisterClients/signUpSchema';

async function listClients() {
  try {
    const response = await clientApi.listClient();
    return response.map(clientAdapter.toClient)
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

async function createClient(params: RegisterClientsSchema, user_id: string) {
  try {
    const body = {
      name: params.name,
      email: params.email ?? undefined,
      phone: params.phone ?? undefined,
      date_nasc: params.birthDate ?? undefined,
      user_id: user_id
    }
    const response = await clientApi.createClient(body);
    toast?.show('Cliente cadastrado com sucesso!', {
      type: 'success',
    });
    return clientAdapter.toClient(response)

  } catch (error) {
    toast?.show(t('erroGeneric'), {
      type: 'danger',
    });
  }
}

export const clientService = {
  listClients,
  createClient
};

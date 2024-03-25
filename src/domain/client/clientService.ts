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
    toast?.show(t('erroGeneric'), {
      type: 'danger',
    });
  }
}

async function createClient(params: RegisterClientsSchema, user_id: string) {
  try {
    const body = {
      name: params.name,
      email: params.email?.length != 0 ? params.email : undefined,
      phone: params.phone?.length != 0 ? params.phone : undefined,
      date_nasc: params.birthDate?.length != 0 ? params.phone : undefined,
      user_id: user_id
    }
    const response = await clientApi.createClient(body);
    toast?.show(t('customerRegisteredSuccessfully'), {
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

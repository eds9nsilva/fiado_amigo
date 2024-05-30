import { clientAdapter } from './clientAdapter';
import { t } from 'i18next';
import { clientApi } from './clientsAPI';
import { RegisterClientsSchema } from '../../screens/app/RegisterClients/signUpSchema';
import { Client, listClientsParams, searchClientParams as searchClientParams } from './clientsTypes';

async function listClients({ user_id }: listClientsParams) {
  try {
    const params: listClientsParams = {
      user_id,
    }
    const response = await clientApi.listClient(params);
    return response.map(clientAdapter.toClient)
  } catch (error) {
    toast?.show(t('errorGeneric'), {
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
      date_nasc: params.birthDate?.length != 0 ? params.birthDate : undefined,
      user_id: user_id
    }
    const response = await clientApi.createClient(body);
    toast?.show(t('customerRegisteredSuccessfully'), {
      type: 'success',
    });
    return clientAdapter.toClient(response)
  } catch (error) {
    toast?.show(t('errorGeneric'), {
      type: 'danger',
    });
  }
}

async function searchClient(params: searchClientParams) {
  try {
    const response = await clientApi.searchClient(params);
    return response.map(clientAdapter.toClient)
  } catch (error) {
    toast?.show(t('errorGeneric'), {
      type: 'danger',
    });
  }
}

async function deleteClient(id_client: string) {
  try {
    await clientApi.deleteClient(id_client);
    toast?.show('Cliente apagado com sucesso!', {
      type: 'success',
    });
  } catch (error) {
    toast?.show(t('errorGeneric'), {
      type: 'danger',
    });
  }
}

async function updateClient(params: Omit<Client, 'status'>): Promise<boolean> {
  try {
    await clientApi.updateClient(params);
    toast?.show(t('customerUpdatedSuccessfully'), {
      type: 'success',
    });
    return true;
  } catch {
    toast?.show(t('errorGeneric'), {
      type: 'danger',
    });
    return false;
  }
}

export const clientService = {
  listClients,
  createClient,
  searchClient,
  deleteClient,
  updateClient
};

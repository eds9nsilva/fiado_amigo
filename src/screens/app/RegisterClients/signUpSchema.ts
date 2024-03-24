import { z } from 'zod';

import { stringUtils } from '../../../utils/stringsUtils';
import { t } from 'i18next';


export const registerClientsSchema = z.object({
  name: z
    .string()
    .min(3, t('veryShortName'))
    .max(50, t('veryLongName'))
    .transform(stringUtils.capitalizeFirstLetter),
  phone: z.string().min(8, t('passwordMust8Characters')).nullable(),
  email: z.string().email(t('invalidEmail')).nullable(),
  birthDate: z.string().min(8, t('passwordMust8Characters')).nullable(),
})

export type RegisterClientsSchema = z.infer<typeof registerClientsSchema>;

import { z } from 'zod';

import { stringUtils } from '../../../utils/stringsUtils';
import { t } from 'i18next';


export const registerClientsSchema = z.object({
  name: z
    .string()
    .min(3, t('veryShortName'))
    .max(50, t('veryLongName'))
    .transform(stringUtils.capitalizeFirstLetter),
  phone: z.string().min(15, t('invalidFormat')).optional().or(z.literal('')),
  email: z.string().email(t('invalidEmail')).optional().optional().or(z.literal('')),
  birthDate: z.string().min(10, t('invalidFormat')).optional().or(z.literal('')),
})

export type RegisterClientsSchema = z.infer<typeof registerClientsSchema>;

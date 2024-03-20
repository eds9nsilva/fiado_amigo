import { z } from 'zod';

import { stringUtils } from '../../../utils/stringsUtils';
import { t } from 'i18next';


export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, t('veryShortName'))
    .max(50, t('veryLongName'))
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email(t('invalidEmail')),
  password: z.string().min(8, t('passwordMust8Characters')),
  confirmPassword: z.string().min(8,  t('passwordMust8Characters'))
}).refine((data) => data.password === data.confirmPassword, {
  message: t('passwordsMustSame'),
  path: ["confirmPassword"],
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

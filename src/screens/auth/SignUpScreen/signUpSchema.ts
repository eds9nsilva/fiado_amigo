import { z } from 'zod';

import { stringUtils } from '../../../utils/stringsUtils';


export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  confirmPassword: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres')
}).refine((data) => data.password === data.confirmPassword, {
  message: ('typeYourEmail'),
  path: ["confirmPassword"],
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

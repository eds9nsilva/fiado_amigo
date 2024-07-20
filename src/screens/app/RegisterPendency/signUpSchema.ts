import { z } from 'zod';

export const registerPendencySchema = z.object({
  client_id: z.string(),
  value: z.string(),
  due_date: z.string(),
  description: z.string().optional().optional().or(z.literal('')),
})

export type RegisterPendencySchema = z.infer<typeof registerPendencySchema>;

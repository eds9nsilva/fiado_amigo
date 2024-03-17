import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { type UserStore } from './authType';
import { createAccountService } from '@domain';
import { mmkvStorage } from '@services';

const initialUserStore = {
  user: undefined,
  token: undefined,
  loading: false,
};

const KEY_STORAGE = 'user-storage';

export const useAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialUserStore,
      setUser: (user) => set(() => ({ user })),
      setToken: (token) => set(() => ({ token })),
      signUp: async (params) => {
        await createAccountService.createAccount(params);
      }
    }),
    {
      name: KEY_STORAGE,
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
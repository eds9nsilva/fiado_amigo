import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { type UserStore } from './authType';
import {
  ParamsCreateAccount,
  ParamsLoginAccount,
  loginAccountService,
  createAccountService
} from '@domain';
import { mmkvStorage } from '@storage';

const initialUserStore = {
  user: undefined,
  token: undefined,
  loading: false,
  rememberMe: false,
};

const KEY_STORAGE = 'user-storage';

export const useAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialUserStore,
      setUser: (user) => set(() => ({ user })),
      setToken: (token) => set(() => ({ token })),

      login: async (params) => {
        set(() => ({ loading: true }))
        const response = await loginAccountService.loginAccount(params);
        set(() => ({ user: response?.user }))
        set(() => ({ token: response?.token }))
        set(() => ({ loading: false }))
      },

      setRememberMe: (rememberMe) => set(() => ({ rememberMe })),

      signUp: async (params) => {
        set(() => ({ loading: true }))
        const response = await createAccountService.createAccount(params);
        set(() => ({ loading: false }))
        return response?.user;
      }
    }),
    {
      name: KEY_STORAGE,
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
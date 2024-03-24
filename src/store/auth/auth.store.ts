import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useNavigation } from '@react-navigation/native';
import { type UserStore } from './authType';
import {
  loginAccountService,
  createAccountService
} from '@domain';
import { mmkvStorage } from '@storage';
import { api } from '@services';

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
        api.defaults.headers.Authorization = `Bearer ${response?.token}`;
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
      },
    logout: (rememberMe) => {
        if (rememberMe) {
          set(() => ({ token: undefined }))
        } else {
          set(() => ({ token: undefined }))
          set(() => ({ user: undefined }))
        }
      },
    }),
    {
      name: KEY_STORAGE,
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        rememberMe: state.rememberMe,
      }),
    },
  ),
);

import apiDyV from '@/api/apiDyV';
import type { User } from '../interfaces';
import { isAxiosError } from 'axios';

interface CheckError {
  ok: false;
  message: string;
}

interface CheckSuccess {
  ok: true;
  user: User;
  token: string;
}

export const checkauthAction = async (): Promise<CheckError | CheckSuccess> => {
  try {
    const localToken = localStorage.getItem('token') || '';
    if (!localToken && localToken.length < 10) {
      return { ok: false, message: 'No token' };
    }

    const { data } = await apiDyV.get('/auth/check-status/');

    return {
      ok: true,
      user: data.user,
      token: data.access,
    };
  } catch (error: any) {
    console.log(error);

    if (isAxiosError(error) && error.response?.status === 401) {
      return { ok: false, message: 'Token expired' };
    }

    throw new Error('No se pudo verificar el usuario');
  }
};

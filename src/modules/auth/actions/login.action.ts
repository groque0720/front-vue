import apiDyV from '@/api/apiDyV';
import type { AuthResponse, User } from '../interfaces';
import { isAxiosError } from 'axios';

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const loginAction = async (
  email: string,
  password: string,
): Promise<LoginSuccess | LoginError> => {
  try {
    const { data } = await apiDyV.post<AuthResponse>('/auth/login/', {
      email,
      password,
    });

    console.log(data);

    return {
      ok: true,
      user: data.user,
      token: data.access,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message: error.response?.data.message || error.message,
      };
    }

    throw new Error('No se puedo realizar la petición de accceso');
  }
};

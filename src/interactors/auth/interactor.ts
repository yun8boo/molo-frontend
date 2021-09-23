// models
import { Login } from '@/models/auth/Login';
import { SignUp } from '@/models/auth/SignUp';
import { CurrentUser } from '@/models/user/CurrentUser';
// types
import { LoginResponseType, SignUpResponseType } from '@/types/api/auth';
// interactor
import { baseInteractor } from '../baseInteractor';

export const authInteractor = () => {
  const login = async ({ email, password }: Login) => {
    const res = await baseInteractor.post<LoginResponseType>({
      url: '/auth/login',
      body: { email, password },
    });
    return res;
  };
  const signUp = async ({ email, password }: SignUp) => {
    const res = await baseInteractor.post<SignUpResponseType>({
      url: '/auth/signup',
      body: { email, password },
    });
    return res;
  };
  return {
    login,
    signUp,
  };
};

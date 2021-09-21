// types
import { GetCurrentUserResponseType } from '@/types/api/user';
// interactor
import { baseInteractor } from '../baseInteractor';
// models
import { CurrentUser } from '@/models/user/CurrentUser';

export const userInteractor = () => {
  const getCurrentUser = async ({ token }: { token: string }) => {
    const { data, error } =
      await baseInteractor.get<GetCurrentUserResponseType>({
        url: '/current_user',
        token,
      });
    return {
      data: !!data
        ? new CurrentUser(data.accessToken, data.id, data.email, data.name)
        : undefined,
      error,
    };
  };
  return {
    getCurrentUser,
  };
};

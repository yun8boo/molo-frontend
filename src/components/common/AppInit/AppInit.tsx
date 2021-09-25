import { useEffect } from 'react';
import { userInteractor } from '@/interactors/user/interactor';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export const AppInit = () => {
  const { setCurrentUser } = useCurrentUser();
  useEffect(() => {
    const storedJwt = localStorage.getItem('token');

    const getCurrentUser = async () => {
      if (storedJwt) {
        const { data } = await userInteractor().getCurrentUser({
          token: storedJwt,
        });
        setCurrentUser(data);
      } else {
        setCurrentUser(undefined);
      }
    };
    getCurrentUser();
  }, []);

  return null;
};

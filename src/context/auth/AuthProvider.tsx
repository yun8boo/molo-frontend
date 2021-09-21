import { useRouter } from 'next/router'
import { createContext, useState, useEffect, ReactNode } from 'react';
import { userInteractor } from '@/interactors/user/interactor';
import { CurrentUser } from '@/models/user/CurrentUser';

type AuthContextType = {
  currentUser: CurrentUser | undefined;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
});

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()
  const [data, setData] = useState<CurrentUser | undefined | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const storedJwt = localStorage.getItem('token');
    const getCurrentUser = async () => {
      if(storedJwt) {
        const { data } = await userInteractor().getCurrentUser({token: storedJwt});
        if(!!data) {
          localStorage.setItem('token', data.accessToken);
          setIsAuth(true)
        }
        setData(data)
      }else {
        setIsAuth(false)
      }
    }
    getCurrentUser()
  }, [])

  if (!isAuth || !data) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser: data,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
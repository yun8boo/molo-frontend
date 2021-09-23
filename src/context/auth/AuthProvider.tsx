import { useRouter } from "next/router";
import { createContext, useState, useEffect, ReactNode, SetStateAction } from 'react';
import { CurrentUser } from '@/models/user/CurrentUser';

type AuthContextType = {
  /*
    null: 検証中
    undefined: 未認証
    CurrentUser: 認証済み
  */
  currentUser: CurrentUser | undefined | null;
  setCurrentUser: (value: SetStateAction<CurrentUser | null | undefined>) => void
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  setCurrentUser: () => {}
});

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()
  const [data, setData] = useState<CurrentUser | undefined | null>(null);
  useEffect(() => {
    if(data === undefined) {
      console.log('move');
      
      if(router.pathname !== '/login' && router.pathname !== '/signup') {
        router.push('/login')
      }
    }
  },[data])
  return (
    <AuthContext.Provider
      value={{
        currentUser: data,
        setCurrentUser: setData
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
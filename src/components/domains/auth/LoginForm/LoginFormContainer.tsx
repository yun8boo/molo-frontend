import { useRouter } from "next/router";
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { authInteractor } from '@/interactors/auth/interactor';
import { Login } from '@/models/auth/Login';
import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { CurrentUser } from "@/models/user/CurrentUser";

export const LoginFormContainer = () => {
  const { push } = useRouter()
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { setCurrentUser } = useCurrentUser()

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const login = async () => {
    const login = new Login(emailValue, passwordValue);
    const { data, error } = await authInteractor().login(login);
    if(!!data) {
      const currentUser = new CurrentUser(data.id, data.email, data.name)
      setCurrentUser(currentUser)
      console.log(data);
      localStorage.setItem('token', data.accessToken)
      push('/')
    }
    console.log({ data, error });
  };

  return (
    <LoginForm
      emailValue={emailValue}
      emailOnChange={handleEmailOnChange}
      passwordValue={passwordValue}
      passwordOnChange={handlePasswordOnChange}
      login={login}
    />
  );
};

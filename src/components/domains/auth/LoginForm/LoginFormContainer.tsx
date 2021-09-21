import { authInteractor } from '@/interactors/auth/interactor';
import { Login } from '@/models/auth/Login';
import React, { useState } from 'react';
import { LoginForm } from './LoginForm';

export const LoginFormContainer = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const login = async () => {
    const login = new Login(emailValue, passwordValue);
    const { data, error } = await authInteractor().login(login);
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

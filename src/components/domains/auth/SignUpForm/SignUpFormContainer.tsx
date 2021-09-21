import { authInteractor } from '@/interactors/auth/interactor';
import { SignUp } from '@/models/auth/SignUp';
import React, { useState } from 'react';
import { SignUpForm } from './SignUpForm';

export const SignUpFormContainer = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const signUp = async () => {
    const signUp = new SignUp(emailValue, passwordValue);
    const { data, error } = await authInteractor().signUp(signUp);
    console.log({ data, error });
  };

  return (
    <SignUpForm
      emailValue={emailValue}
      emailOnChange={handleEmailOnChange}
      passwordValue={passwordValue}
      passwordOnChange={handlePasswordOnChange}
      signUp={signUp}
    />
  );
};

import { useRouter } from "next/router";
import React, { useState } from 'react';
import { authInteractor } from '@/interactors/auth/interactor';
import { SignUp } from '@/models/auth/SignUp';
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { CurrentUser } from "@/models/user/CurrentUser";
import { SignUpForm } from './SignUpForm';

export const SignUpFormContainer = () => {
  const router = useRouter()
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const {setCurrentUser} = useCurrentUser()

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const signUp = async () => {
    const signUp = new SignUp(emailValue, passwordValue);
    const { data, error } = await authInteractor().signUp(signUp);
    if(!!data) {
      const currentUser = new CurrentUser(data.id, data.email, data.name)
      setCurrentUser(currentUser)
      localStorage.setItem('token', data.accessToken)
      router.push('/')
    }
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

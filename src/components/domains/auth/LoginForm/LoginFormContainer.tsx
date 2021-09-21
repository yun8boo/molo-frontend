import React, { useState } from 'react';
import { LoginForm } from './LoginForm';

export const LoginFormContainer = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);
  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);
  return (
    <LoginForm
      emailValue={emailValue}
      emailOnChange={handleEmailOnChange}
      passwordValue={passwordValue}
      passwordOnChange={handlePasswordOnChange}
    />
  );
};

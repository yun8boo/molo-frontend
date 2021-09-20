import { useState } from 'react';
import { PasswordInput } from './PasswordInput';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInputContainer = ({ value, onChange }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowClick = () => setIsShowPassword(!isShowPassword);
  return (
    <PasswordInput
      value={value}
      onChange={onChange}
      isShowPassword={isShowPassword}
      onShowClick={handleShowClick}
    />
  );
};

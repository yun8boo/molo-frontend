import { EmailInput } from './EmailInput';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInputContainer = ({ value, onChange }: Props) => {
  return <EmailInput value={value} onChange={onChange} />;
};

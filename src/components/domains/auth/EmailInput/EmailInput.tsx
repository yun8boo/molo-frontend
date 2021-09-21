import {
  FormControl,
  InputGroup,
  InputLeftElement,
  chakra,
  Input,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput = ({ value, onChange }: Props) => {
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CFaUserAlt color="gray.300" />
        </InputLeftElement>
        <Input
          type="email"
          placeholder="email address"
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </FormControl>
  );
};

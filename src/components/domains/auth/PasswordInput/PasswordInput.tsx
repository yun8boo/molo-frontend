import {
  FormControl,
  InputGroup,
  InputLeftElement,
  chakra,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';

const CFaLock = chakra(FaLock);

interface Props {
  value: string;
  isShowPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onShowClick: () => void;
}

export const PasswordInput = ({
  isShowPassword,
  onChange,
  onShowClick,
}: Props) => {
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CFaLock color="gray.300" />
        </InputLeftElement>
        <Input
          type={isShowPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={onShowClick}>
            {isShowPassword ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

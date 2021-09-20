import {
  FormControl,
  InputGroup,
  InputLeftElement,
  chakra,
  Input,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);

export const EmailInput = () => {
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement>
          <CFaUserAlt color="gray.300" />
        </InputLeftElement>
        <Input type="email" placeholder="email address" />
      </InputGroup>
    </FormControl>
  );
};

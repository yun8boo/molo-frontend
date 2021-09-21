import { Box, Stack } from '@chakra-ui/react';
import { EmailInput } from '../EmailInput/EmailInput';
import { LoginButton } from '../LoginButton/LoginButton';
import { PasswordInputContainer } from '../PasswordInput';

interface Props {
  emailValue: string;
  emailOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  passwordOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginForm = ({
  emailValue,
  emailOnChange,
  passwordValue,
  passwordOnChange,
}: Props) => {
  return (
    <Box minW={{ base: '90%', md: '468px' }}>
      <form>
        <Stack
          borderRadius={8}
          spacing={4}
          p="1rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
        >
          <EmailInput />
          <PasswordInputContainer
            value={passwordValue}
            onChange={passwordOnChange}
          />
          <LoginButton />
        </Stack>
      </form>
    </Box>
  );
};

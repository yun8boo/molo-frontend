import { Box, Stack } from '@chakra-ui/react';
import { Button } from '@/components/common/Button';
import { EmailInputContainer } from '../EmailInput';
import { PasswordInputContainer } from '../PasswordInput';

interface Props {
  emailValue: string;
  emailOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  passwordOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
}

export const LoginForm = ({
  emailValue,
  emailOnChange,
  passwordValue,
  passwordOnChange,
  login,
}: Props) => {
  return (
    <Box minW={{ base: '90%', md: '468px' }}>
      <Stack
        borderRadius={8}
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <EmailInputContainer value={emailValue} onChange={emailOnChange} />
        <PasswordInputContainer
          value={passwordValue}
          onChange={passwordOnChange}
        />
        <Button onClick={login} title="Login" />
      </Stack>
    </Box>
  );
};

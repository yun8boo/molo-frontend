import { Button } from '@chakra-ui/react';

export const LoginButton = () => {
  return (
    <Button
      borderRadius={8}
      type="submit"
      variant="solid"
      colorScheme="teal"
      width="full"
    >
      Login
    </Button>
  );
};

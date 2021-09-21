import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: Props) => {
  return (
    <ChakraButton
      borderRadius={8}
      type="submit"
      variant="solid"
      colorScheme="teal"
      width="full"
      onClick={onClick}
    >
      {title}
    </ChakraButton>
  );
};

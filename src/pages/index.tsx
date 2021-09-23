import type { NextPage } from 'next';
import { Flex, Heading, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
    >
      <Flex
      justifyContent="center"
      alignItems="center"
      width="30%"
    >
      left
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      width="70%"
    >
      right
    </Flex>
    </Flex>
  )
};

export default Home;

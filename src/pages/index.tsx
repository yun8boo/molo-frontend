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
      <Flex justifyContent="center" alignItems="center" width="340px">
        left
      </Flex>
      <Flex justifyContent="center" alignItems="center" width="calc(100% - 340px)">
        right
      </Flex>
    </Flex>
  );
};

export default Home;

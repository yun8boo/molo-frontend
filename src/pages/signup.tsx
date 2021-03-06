import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { SignUpFormContainer } from '@/components/domains/auth/SignUpForm';

const SignUp: NextPage = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
    >
      <Head>
        <title>molo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">molo</Heading>
        <SignUpFormContainer />
      </Stack>
    </Flex>
  );
};

export default SignUp;

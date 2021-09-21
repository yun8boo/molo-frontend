import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';
import { Flex, Heading, Stack, Box, Link } from '@chakra-ui/react';
import { LoginFormContainer } from '@/components/domains/auth/LoginForm';

const Login: NextPage = () => {
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
        <LoginFormContainer />
      </Stack>
      <Box>
        New to us?{' '}
        <NextLink href="/signup">
          <Link color="teal.500" href="#">
            Sign Up
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Login;

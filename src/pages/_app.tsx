import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '@/context/auth';
import { AppInit } from '@/components/common/AppInit/AppInit';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <AppInit />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

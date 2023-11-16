'use client';
import React, { ReactNode } from 'react';
import '@styles/App.css';
import '@styles/Contact.css';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import theme from '@theme/theme';
import { AuthUserProvider } from '@contexts/AuthUserProvider';
import NextTopLoader from 'nextjs-toploader';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GoogleAnalytics } from "nextjs-google-analytics";

import queryClient from '@lib/reactQuery';

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics strategy="lazyOnload" />
        )}
        <AuthUserProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
          </QueryClientProvider>
        </AuthUserProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

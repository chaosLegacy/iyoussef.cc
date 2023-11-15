import React, { useEffect } from 'react';

import { useAuth } from 'contexts/AuthUserProvider';
import { useRouter } from 'next/navigation';
import { Flex, Spinner } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

interface protectorProps {
  children: React.ReactNode;
}

const Protector = (props: protectorProps) => {
  const { authUser, loading } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !authUser)
  //     router.replace('/auth/sign-in')
  // }, [authUser, loading])

  if (loading) {
    return <Flex alignItems='center' justifyItems='center' w={'100%'} h={'100%'}><Spinner /></Flex>
  }
  if (authUser) {
    return <>{props.children}</>;
  };
  if (!loading && !authUser) {
    return redirect('/auth/sign-in');
  }
};

export default Protector;

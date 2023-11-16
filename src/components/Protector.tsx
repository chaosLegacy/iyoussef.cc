import React, { useEffect } from 'react';

import { useAuth } from '@contexts/AuthUserProvider';
import { Flex, Spinner } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

interface protectorProps {
  children: React.ReactNode;
}

const Protector = (props: protectorProps) => {
  const { authUser, loading } = useAuth();

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

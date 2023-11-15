import { useQuery } from 'react-query';
import { Collection } from 'lib/constants';
import { ListSubscriptions } from 'services/subscriptionService';
import { useApp } from 'contexts/AuthUserProvider';
import { FetchErrorType } from 'lib/types';
import { useToast } from '@chakra-ui/react';

export const useListSubscriptionQuery = () => {
  const toast = useToast();
  const { name: company } = useApp();
  const {
    data: response,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [Collection.SUBSCRIPTIONS],
    queryFn: () => ListSubscriptions({ company }),
    onError(error: FetchErrorType) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
  return {
    subscriptions: response?.data || [],
    isError,
    isLoading,
    error,
  };
};

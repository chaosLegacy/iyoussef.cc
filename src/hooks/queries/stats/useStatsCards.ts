import { useQuery } from 'react-query';
import { Collection } from 'lib/constants';
import { useApp } from 'contexts/AuthUserProvider';
import { FetchErrorType } from 'lib/types';
import { useToast } from '@chakra-ui/react';
import { statsCards } from 'services/stateService';

export const useStatsCardsQuery = () => {
  const toast = useToast();
  const { name: company } = useApp();
  const {
    data: response,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [Collection.STATES],
    queryFn: () => statsCards({ company }),
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
  console.log('--------------------- response: ', response)
  return {
    data: response?.data,
    isError,
    isLoading,
    error,
  };
};

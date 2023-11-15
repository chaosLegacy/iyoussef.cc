import { useQuery } from 'react-query';
import { Collection } from 'lib/constants';
import { useApp } from 'contexts/AuthUserProvider';
import { FetchErrorType } from 'lib/types';
import { useToast } from '@chakra-ui/react';
import { ListLeads } from 'services/leadService';

export const useListLeadsQuery = () => {
  const toast = useToast();
  const { name: company } = useApp();
  const {
    data: response,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [Collection.LEADS],
    queryFn: () => ListLeads({ company }),
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
    leads: response?.data || [],
    isError,
    isLoading,
    error,
  };
};

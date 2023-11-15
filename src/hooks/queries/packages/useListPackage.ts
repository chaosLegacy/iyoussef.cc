import { useQuery } from 'react-query';
import { Collection } from 'lib/constants';
import { ListPackages } from 'services/packageService';
import { useApp } from 'contexts/AuthUserProvider';
import { FetchErrorType } from 'lib/types';
import { useToast } from '@chakra-ui/react';

export const useListPackageQuery = () => {
  const toast = useToast();
  const { name: company } = useApp();
  const {
    data: response,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [Collection.PACKAGES],
    queryFn: () => ListPackages({ company }),
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
    packages: response?.data || [],
    isError,
    isLoading,
    error,
  };
};

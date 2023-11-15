import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { useApp, useAuth } from 'contexts/AuthUserProvider';
import { AddPackageDto } from 'lib/types/Package';
import { addPackage } from 'services/packageService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type AddPackageMutationArgs = {
  data: AddPackageDto;
};

export const useAddPackageMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { authUser } = useAuth();
  const { name: appName } = useApp();

  return useMutation(
    ({ data }: AddPackageMutationArgs) => {
      return addPackage({ ...data, company: appName, userId: authUser.uid});
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.PACKAGES] });
      },
      onSuccess: () => {
        toast({
          title: 'Package created.',
          description: 'Your package was successfully added',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your package was not created',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

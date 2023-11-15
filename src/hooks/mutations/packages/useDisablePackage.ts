import { useToast } from '@chakra-ui/react';
import { Collection } from 'lib/constants';
import { FetchErrorType } from 'lib/types';
import { DisablePackageDto } from 'lib/types/Package';
import { useMutation, useQueryClient } from 'react-query';
import { disablePackage } from 'services/packageService';

type DisablePackageMutationArgs = {
  data: DisablePackageDto;
};

export default function useDisablePackageMutation() {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    ({ data }: DisablePackageMutationArgs) => {
      return disablePackage(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.PACKAGES] });
      },
      onSuccess: (response) => {
        const { enabled } = response.data;
        toast({
          title: 'Package updated.',
          description: `Your package was successfully ${enabled ? 'enabled' : 'disabled'}`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your package was not updated',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
}

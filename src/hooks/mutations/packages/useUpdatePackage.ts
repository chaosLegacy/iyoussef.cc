import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { UpdatePackageDto } from 'lib/types/Package';
import { updatePackage } from 'services/packageService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type UpdatePackageMutationArgs = {
  data: UpdatePackageDto;
};

export const useUpdatePackageMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: UpdatePackageMutationArgs) => {
      return updatePackage(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.PACKAGES] });
      },
      onSuccess: () => {
        toast({
          title: 'Package updated.',
          description: 'Your package was successfully updated',
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
};

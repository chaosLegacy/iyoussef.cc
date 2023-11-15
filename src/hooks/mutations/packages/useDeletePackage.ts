import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { DeletePackageDto } from 'lib/types/Package';
import { deletePackage } from 'services/packageService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type DeletePackageMutationArgs = {
  data: DeletePackageDto;
};

export const useDeletePackageMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: DeletePackageMutationArgs) => {
      return deletePackage(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.PACKAGES] });
      },
      onSuccess: () => {
        toast({
          title: 'Package deleted.',
          description: 'Your package was successfully deleted',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your package was not deleted',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

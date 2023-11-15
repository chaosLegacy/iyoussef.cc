import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { DeleteLeadDto } from 'lib/types/Lead';
import { deleteLead } from 'services/leadService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type DeleteLeadMutationArgs = {
  data: DeleteLeadDto;
};

export const useDeleteLeadMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: DeleteLeadMutationArgs) => {
      return deleteLead(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.LEADS] });
      },
      onSuccess: () => {
        toast({
          title: 'Lead deleted.',
          description: 'Your lead was successfully deleted',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your lead was not deleted',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

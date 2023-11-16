import { useMutation, useQueryClient } from 'react-query';
import { Collection } from '@lib/constants';
import { UpdateLeadDto } from '@lib/types/Lead';
import { updateLead } from '@services/leadService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from '@lib/types';

type UpdateLeadMutationArgs = {
  data: UpdateLeadDto;
};

export const useUpdateLeadMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: UpdateLeadMutationArgs) => {
      return updateLead(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.LEADS] });
      },
      onSuccess: () => {
        toast({
          title: 'Lead updated.',
          description: 'Your lead was successfully updated',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your lead was not updated',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

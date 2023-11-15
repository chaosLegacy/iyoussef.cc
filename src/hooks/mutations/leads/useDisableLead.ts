import { useToast } from '@chakra-ui/react';
import { Collection } from 'lib/constants';
import { FetchErrorType } from 'lib/types';
import { DisableLeadDto } from 'lib/types/Lead';
import { useMutation, useQueryClient } from 'react-query';
import { disableLead } from 'services/leadService';

type DisableLeadMutationArgs = {
  data: DisableLeadDto;
};

export default function useDisableLeadMutation() {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    ({ data }: DisableLeadMutationArgs) => {
      return disableLead(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.LEADS] });
      },
      onSuccess: (response) => {
        const { isActive } = response.data;
        toast({
          title: 'Lead updated.',
          description: `Your lead was successfully ${
            isActive ? 'enabled' : 'disabled'
          }`,
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
}

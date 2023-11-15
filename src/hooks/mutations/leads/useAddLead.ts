import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { useApp, useAuth } from 'contexts/AuthUserProvider';
import { AddLeadDto } from 'lib/types/Lead';
import { addLead } from 'services/leadService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type AddLeadMutationArgs = {
  data: AddLeadDto;
};

export const useAddLeadMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { authUser } = useAuth();
  const { name: appName } = useApp();

  return useMutation(
    ({ data }: AddLeadMutationArgs) => {
      return addLead({ ...data, company: appName, userId: authUser.uid });
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.LEADS] });
      },
      onSuccess: () => {
        toast({
          title: 'Lead created.',
          description: 'Your lead was successfully added',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your lead was not created',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

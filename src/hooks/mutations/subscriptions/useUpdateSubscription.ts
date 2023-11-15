import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { UpdateSubscriptionDto } from 'lib/types/Subscription';
import { updateSubscription } from 'services/subscriptionService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type UpdateSubscriptionMutationArgs = {
  data: UpdateSubscriptionDto;
};

export const useUpdateSubscriptionMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: UpdateSubscriptionMutationArgs) => {
      return updateSubscription(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.PACKAGES] });
      },
      onSuccess: () => {
        toast({
          title: 'Subscription updated.',
          description: 'Your subscription was successfully updated',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your subscription was not updated',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

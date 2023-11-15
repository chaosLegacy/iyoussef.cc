import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { DeleteSubscriptionDto } from 'lib/types/Subscription';
import { deleteSubscription } from 'services/subscriptionService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type DeleteSubscriptionMutationArgs = {
  data: DeleteSubscriptionDto;
};

export const useDeleteSubscriptionMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ data }: DeleteSubscriptionMutationArgs) => {
      return deleteSubscription(data);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.SUBSCRIPTIONS] });
      },
      onSuccess: () => {
        toast({
          title: 'Subscription deleted.',
          description: 'Your subscription was successfully deleted',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your subscription was not deleted',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

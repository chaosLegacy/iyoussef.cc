import { useMutation, useQueryClient } from 'react-query';
import { Collection } from 'lib/constants';
import { useApp, useAuth } from 'contexts/AuthUserProvider';
import { AddSubscriptionDto } from 'lib/types/Subscription';
import { addSubscription } from 'services/subscriptionService';
import { useToast } from '@chakra-ui/react';
import { FetchErrorType } from 'lib/types';

type AddSubscriptionMutationArgs = {
  data: AddSubscriptionDto;
};

export const useAddSubscriptionMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { authUser } = useAuth();
  const { name: appName } = useApp();

  return useMutation(
    ({ data }: AddSubscriptionMutationArgs) => {
      return addSubscription({ ...data, company: appName, userId: authUser.uid});
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [Collection.SUBSCRIPTIONS] });
      },
      onSuccess: () => {
        toast({
          title: 'Subscription created.',
          description: 'Your subscription was successfully added',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error: FetchErrorType) => {
        toast({
          title: 'Sorry, your subscription was not created',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    },
  );
};

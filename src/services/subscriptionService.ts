import { API } from 'lib/constants';
import fetcher from 'lib/fetcher';
import { ApiDataResponse } from 'lib/types';
import {
  AddSubscriptionDto,
  DeleteSubscriptionDto,
  ListSubscriptionDto,
  Subscription,
  UpdateSubscriptionDto,
} from 'lib/types/Subscription';
import { objectToString } from 'utils/functions';

const ListSubscriptions = async (
  params: ListSubscriptionDto,
): Promise<ApiDataResponse<Subscription[]>> => {
  return fetcher(API.SUBSCRIPTION.LIST_URL + objectToString(params));
};

const addSubscription = async (
  params: AddSubscriptionDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.SUBSCRIPTION.ADD_URL, 'POST', JSON.stringify(params));
};

const updateSubscription = async (
  params: UpdateSubscriptionDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.SUBSCRIPTION.UPDATE_URL, 'POST', JSON.stringify(params));
};

const deleteSubscription = async (
  params: DeleteSubscriptionDto,
): Promise<ApiDataResponse<DeleteSubscriptionDto>> => {
  return await fetcher(API.SUBSCRIPTION.DELETE_URL + objectToString(params));
};

export { ListSubscriptions, addSubscription, updateSubscription, deleteSubscription };

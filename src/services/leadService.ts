import { API } from '@lib/constants';
import fetcher from '@lib/fetcher';
import { ApiDataResponse } from '@lib/types';
import { AddLeadDto, DeleteLeadDto, DisableLeadDto, Lead, ListLeadDto, UpdateLeadDto } from 'lib/types/Lead';

import { objectToString } from '@utils/functions';

const ListLeads = async (
  params: ListLeadDto,
): Promise<ApiDataResponse<Lead[]>> => {
  return fetcher(API.LEADS.LIST_URL + objectToString(params));
};

const addLead = async (
  params: AddLeadDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.LEADS.ADD_URL, 'POST', JSON.stringify(params));
};

const updateLead = async (
  params: UpdateLeadDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.LEADS.UPDATE_URL, 'POST', JSON.stringify(params));
};

const deleteLead = async (
  params: DeleteLeadDto,
): Promise<ApiDataResponse<DeleteLeadDto>> => {
  return await fetcher(API.LEADS.DELETE_URL + objectToString(params));
};

const disableLead = async (
  params: DisableLeadDto,
): Promise<ApiDataResponse<DisableLeadDto>> => {
  return await fetcher(API.LEADS.DISABLE_URL + objectToString(params));
};

export { ListLeads, addLead, updateLead, deleteLead, disableLead };

import { API } from 'lib/constants';
import fetcher from 'lib/fetcher';
import { ApiDataResponse } from 'lib/types';
import {
  AddPackageDto,
  DeletePackageDto,
  DisablePackageDto,
  ListPackageDto,
  Package,
  UpdatePackageDto,
} from 'lib/types/Package';
import { objectToString } from 'utils/functions';

const ListPackages = async (
  params: ListPackageDto,
): Promise<ApiDataResponse<Package[]>> => {
  return fetcher(API.PACKAGES.LIST_URL + objectToString(params));
};

const addPackage = async (
  params: AddPackageDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.PACKAGES.ADD_URL, 'POST', JSON.stringify(params));
};

const updatePackage = async (
  params: UpdatePackageDto,
): Promise<ApiDataResponse<unknown>> => {
  return await fetcher(API.PACKAGES.UPDATE_URL, 'POST', JSON.stringify(params));
};

const deletePackage = async (
  params: DeletePackageDto,
): Promise<ApiDataResponse<DeletePackageDto>> => {
  return await fetcher(API.PACKAGES.DELETE_URL + objectToString(params));
};

const disablePackage = async (
  params: DisablePackageDto,
): Promise<ApiDataResponse<DisablePackageDto>> => {
  return await fetcher(API.PACKAGES.DISABLE_URL + objectToString(params));
};

export { ListPackages, addPackage, updatePackage, deletePackage, disablePackage };

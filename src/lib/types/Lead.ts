import { TCountryCode } from "countries-list";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  country?: string;
  note: string;
  isActive: boolean;
  avatar?: string;
  userId?: string;
  company?: string;
  createdAt?: string;
};

type AddLeadDto = Omit<Lead, 'id' | 'isActive' | 'createdAt'>;

type UpdateLeadDto = Omit<
  Lead,
  'isActive' | 'userId' | 'company' | 'createdAt'
>;

type DeleteLeadDto = Pick<Lead, 'id' | 'fullName'>;

type DisableLeadDto = Pick<Lead, 'id' | 'isActive'>;

type ListLeadDto = Pick<Lead, 'company'>;

export type {
  Lead,
  AddLeadDto,
  UpdateLeadDto,
  DeleteLeadDto,
  DisableLeadDto,
  ListLeadDto,
};

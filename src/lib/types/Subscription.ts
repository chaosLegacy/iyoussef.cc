import { SubscriptionStatus } from "data/enums/subscription";

type Subscription = {
  id: string;
  leadId: string;
  isTrial: boolean;
  status: SubscriptionStatus;
  packageId?: string;
  expireDate: string;
  price: number;
  userId?: string;
  company?: string;
  createdAt?: string;
};
type AddSubscriptionDto = Omit<Subscription, 'id'>;
type UpdateSubscriptionDto = Omit<Subscription, 'userId' | 'company'>;
type DeleteSubscriptionDto = Pick<Subscription, 'id'>;
type ListSubscriptionDto = Pick<Subscription, 'company'>;

export type {
  Subscription,
  AddSubscriptionDto,
  UpdateSubscriptionDto,
  DeleteSubscriptionDto,
  ListSubscriptionDto,
};

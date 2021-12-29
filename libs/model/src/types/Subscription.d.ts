export interface Subscription {
  id: string /* primary key */;
  userId: string;
  status?: any; // type unknown;
  metadata?: any; // type unknown;
  priceId?: string /* foreign key to prices.id */;
  quantity?: any; // type unknown;
  cancelAtPeriodEnd?: boolean;
  created: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  endedAt?: string;
  cancelAt?: string;
  canceledAt?: string;
  trialStart?: string;
  trialEnd?: string;
  prices?: Price;
}

export interface Price {
  id: string /* primary key */;
  productId?: string /* foreign key to products.id */;
  active?: boolean;
  description?: string;
  unitAmount?: number;
  currency?: string;
  type?: string;
  interval?: Stripe.Price.Recurring.Interval;
  intervalCount?: number;
  trialPeriodDays?: number | null;
  metadata?: Record<string, string>; // type unknown;
  products?: Product[];
}

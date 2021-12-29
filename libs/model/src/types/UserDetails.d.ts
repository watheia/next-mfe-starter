export interface UserDetails {
  id: string /* primary key */;
  fullName?: string;
  avatarUrl?: string;
  billingAddress?: any; // type unknown;
  paymentMethod?: any; // type unknown;
}

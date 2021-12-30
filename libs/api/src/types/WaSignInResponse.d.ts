export type WaSignInResponse = Promise<{
  session: Session | null;
  user: User | null;
  provider?: Provider;
  url?: string | null;
  error: ApiError | null;
}>;

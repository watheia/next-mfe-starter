export type WaSignUpResponse = Promise<{
  user: User | null;
  session: Session | null;
  error: ApiError | null;
}>;

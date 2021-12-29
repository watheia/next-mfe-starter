import { createContext, useContext } from 'react';
import { Session, User, Provider, ApiError } from '@supabase/supabase-js';
import { UserDetails } from '@waweb/model';

export interface ISignInRequest {
  email?: string;
  password?: string;
  provider?: Provider;
}

export type ISignInResponse = Promise<{
  session: Session | null;
  user: User | null;
  provider?: Provider;
  url?: string | null;
  error: ApiError | null;
}>;

export interface ISignUpRequest {
  email: string;
  password: string;
}

export type ISignUpResponse = Promise<{
  user: User | null;
  session: Session | null;
  error: ApiError | null;
}>;

export interface IAuthContext {
  session: Session | null;
  user: User | null;
  userDetails: UserDetails | null;
  userLoaded: boolean;
  signIn: (options: ISignInRequest) => ISignInResponse;
  signUp: (options: ISignUpRequest) => ISignUpResponse;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider.`);
  }

  return context;
};

import { Session, User } from '@supabase/supabase-js';
import React, { ReactNode, useEffect, useState } from 'react';
import { User as UserDetails } from '@prisma/client';
import { supabase } from '../supabase';
import { AuthContext, IAuthContext, ISignInRequest, ISignUpRequest } from './auth-context';

export type AuthProviderProps = Partial<IAuthContext> & {
  children: ReactNode | ReactNode[];
};

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const getUserDetails = () => supabase.from<UserDetails>('users').select('*').single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0];
        if (userDetailsPromise.status === 'fulfilled')
          setUserDetails(userDetailsPromise.value.data);

        setUserLoaded(true);
      });
    }
  }, [user]);

  const value = {
    session,
    user,
    userDetails,
    userLoaded,
    signIn: (options: ISignInRequest) => supabase.auth.signIn(options),
    signUp: (options: ISignUpRequest) => supabase.auth.signUp(options),
    signOut: () => {
      setUserDetails(null);
      return supabase.auth.signOut();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

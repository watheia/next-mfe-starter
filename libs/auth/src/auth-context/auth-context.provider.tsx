import { Session, User } from '@supabase/supabase-js';
import React, { ReactNode, useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { WaAuthContext } from '../types/WaAuthContext';
import { WaSignInRequest } from '../types/WaSignInRequest';
import { WaSignUpRequest } from '../types/WaSignUpRequest';
import { AuthContext } from './auth-context';

export type AuthProviderProps = Partial<WaAuthContext> & {
  children: ReactNode | ReactNode[];
};

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info(event);
        setSession(session);
        setUserLoaded(!!session?.user);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);


  const value = {
    session,
    userLoaded,
    signIn: (options: WaSignInRequest) => supabase.auth.signIn(options),
    signUp: (options: WaSignUpRequest) => supabase.auth.signUp(options),
    signOut: () => {
      setUserLoaded(false);
      return supabase.auth.signOut();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

import { createClient } from '@supabase/supabase-js';
import React, { ReactNode, useMemo } from 'react';
import { SupabaseContext } from './supabase-context';
import env from '../env';

export type SupabaseProviderProps = {
  /**
   * The api gateway
   */
  publicUrl?: string;

  /**
   * The api gateway
   */
  anonKey?: string;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function SupabaseProvider({
  publicUrl = env.supabase_url,
  anonKey = env.public_key,
  children,
}: SupabaseProviderProps) {
  const supabase = useMemo(() => createClient(publicUrl, anonKey), [publicUrl, anonKey]);
  return (
    <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>
  );
}

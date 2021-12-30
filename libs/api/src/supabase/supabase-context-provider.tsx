import { createClient } from '@supabase/supabase-js';
import React, { ReactNode, useMemo } from 'react';
import { SupabaseContext } from './supabase-context';

export type SupabaseProviderProps = {
  /**
   * The api gateway
   */
  publicUrl: string;

  /**
   * The api gateway
   */
  anonKey: string;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function SupabaseProvider({ publicUrl, anonKey, children }: SupabaseProviderProps) {
  console.info('USE SUPABASE', publicUrl);
  const supabase = useMemo(() => createClient(publicUrl, anonKey), [publicUrl, anonKey]);
  return (
    <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>
  );
}

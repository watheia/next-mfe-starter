import { SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

export type SupabaseContextType = {
  /**
   * Reference to supabase singleton.
   */
  supabase: SupabaseClient;
};

export const SupabaseContext = createContext<SupabaseContextType | null>(null);

export const useSupabase = (): SupabaseClient => {
  const ctx = useContext(SupabaseContext);
  if (ctx === null) {
    throw new Error(`useSupabase must be used within a SupabaseProvider.`);
  }

  return ctx.supabase;
};

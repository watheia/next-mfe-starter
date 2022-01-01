import React from 'react';
import { useSupabase } from './supabase-context';
import { SupabaseProvider } from './supabase-context-provider';
import env from '../env'

export function MockComponent() {
  const supabase = useSupabase();
  return <div>{supabase.rpc.toString()}</div>;
}

export const SupaAuthExample = () => {
  console.log('SupaAuthExample', env.home_url, env.supabase_url);
  return (
    <SupabaseProvider publicUrl={env.supabase_url} anonKey={env.public_key}>
      <MockComponent />
    </SupabaseProvider>
  );
};

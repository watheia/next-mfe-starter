import React from 'react';
import { useSupabase } from './supabase-context';
import { SupabaseProvider } from './supabase-context-provider';

export function MockComponent() {
  const supabase = useSupabase();
  return <div>{supabase.rpc.toString()}</div>;
}

export const SupaAuthExample = () => {
  return (
    <SupabaseProvider
      publicUrl={process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? ''}
      anonKey={process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? ''}
    >
      <MockComponent />
    </SupabaseProvider>
  );
};

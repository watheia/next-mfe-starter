import { AuthProvider, SupabaseProvider } from '@watheia/mfe.api';
import React from 'react';
import AppBar from './app-bar';

export const AppBarExample = () => {
  return (
    <SupabaseProvider
      publicUrl={process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? ''}
      anonKey={process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? ''}
    >
      <AuthProvider>
        <AppBar />
      </AuthProvider>
    </SupabaseProvider>
  );
};

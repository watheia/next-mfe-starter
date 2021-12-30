import { render } from '@testing-library/react';
import { AuthProvider, env, SupabaseProvider } from '@watheia/mfe.api';
import React from 'react';
import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { container } = render(
      <SupabaseProvider publicUrl={env.supabase_url} anonKey={env.public_key}>
        <AuthProvider>
          <Index />
        </AuthProvider>
      </SupabaseProvider>
    );
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

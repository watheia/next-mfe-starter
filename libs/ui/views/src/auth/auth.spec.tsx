import { render } from '@testing-library/react';
import { AuthProvider, env, SupabaseProvider } from '@watheia/mfe.api';
import Auth from './auth';

describe('Auth', () => {
  it('should render successfully', () => {
    const { container } = render(
      <SupabaseProvider publicUrl={env.supabase_url} anonKey={env.public_key}>
        <AuthProvider>
          <Auth />
        </AuthProvider>
      </SupabaseProvider>
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});

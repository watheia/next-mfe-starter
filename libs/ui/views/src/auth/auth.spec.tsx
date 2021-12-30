import { render } from '@testing-library/react';
import { AuthProvider, useAuth } from '@watheia/mfe.api';
import Auth from './auth';

describe('Auth', () => {
  it('should render successfully', () => {
    const { container } = render(
      <AuthProvider>
        <Auth ctx={useAuth()} />
      </AuthProvider>
    );
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});

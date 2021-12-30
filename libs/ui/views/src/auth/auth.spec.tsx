import { render } from '@testing-library/react';
import { AuthProvider, useAuth } from '@waweb/auth';
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

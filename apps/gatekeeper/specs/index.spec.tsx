import { render } from '@testing-library/react';
import { AuthProvider } from '@waweb/auth';
import React from 'react';
import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { container } = render(
      <AuthProvider>
        <Index />
      </AuthProvider>
    );
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

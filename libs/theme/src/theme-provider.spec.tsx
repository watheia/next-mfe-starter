import { render } from '@testing-library/react';

import ThemeProvider from './theme-provider';

describe('ThemeProvider', () => {
  it('should render successfully', () => {
    const { container } = render(
      <ThemeProvider>
        <h1>Hello, World!</h1>
      </ThemeProvider>
    );
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import AppBar from './app-bar';

describe('AppBar', () => {
  it('should render successfully', () => {
    const { container } = render(<AppBar />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

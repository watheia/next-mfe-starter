import { render } from '@testing-library/react';

import TabNav from './tab-nav';

describe('TabNav', () => {
  it('should render successfully', () => {
    const routes = [
      { label: 'A', url: '#a' },
      { label: 'B', url: '#b' },
    ];
    const { container } = render(<TabNav routes={routes} />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

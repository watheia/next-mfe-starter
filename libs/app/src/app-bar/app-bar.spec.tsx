import { render } from '@testing-library/react';

import { AppBarExample } from './app-bar.composition';

describe('AppBar', () => {
  it('should render successfully', () => {
    const { container } = render(<AppBarExample />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

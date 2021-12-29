import { render } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

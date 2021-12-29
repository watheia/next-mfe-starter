import { render } from '@testing-library/react';

import Copyright from './copyright';

describe('Copyright', () => {
  it('should render successfully', () => {
    const { container } = render(<Copyright />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

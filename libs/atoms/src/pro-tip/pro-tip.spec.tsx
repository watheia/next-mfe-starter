import { render } from '@testing-library/react';

import ProTip from './pro-tip';

describe('ProTip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProTip />);
    expect(baseElement).toBeTruthy();
  });
});
